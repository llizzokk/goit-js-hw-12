'use strict';

import { fetchImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import icon from './img/error.svg';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader');
const button = document.querySelector('#load-btn');

let currentPage = 1;
let PER_PAGE = 15;
let currentSearch = '';
let totalImages = 0;

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);
button.addEventListener('click', handleLoad);

async function handleSubmit(event) {
  event.preventDefault();

  let searchValue = event.currentTarget.elements.search.value.trim();

  if (!searchValue) {
    return;
  }

  if (searchValue !== currentSearch) {
    currentSearch = searchValue;
    currentPage = 1;
    gallery.innerHTML = '';
  }

  loader.classList.remove('hidden');
  button.classList.replace('btn', 'load-more-hidden');

  try {
    const data = await fetchImages(searchValue, currentPage, PER_PAGE);

    if (data.total === 0) {
      iziToast.error({
        backgroundColor: '#ef4040',
        position: 'topRight',
        titleColor: '#fff',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        messageColor: '#fff',
        messageSize: '16',
        iconColor: '#fff',
        iconUrl: icon,
        timeout: 3000,
        maxWidth: 432,
      });
    } else {
      totalImages = data.totalHits;
      createMarkup(data);
      lightbox.refresh();
      button.classList.replace('load-more-hidden', 'btn');
      currentPage += 1;

      if (data.hits.length < PER_PAGE) {
        button.classList.replace('btn', 'load-more-hidden');
      }
    }
  } catch (error) {
    console.log('Error fetching images:', error);
  } finally {
    loader.classList.add('hidden');
    event.target.elements.search.value = '';
  }
}

async function handleLoad(event) {
  loader.classList.remove('hidden');
  button.disabled = true;

  try {
    const data = await fetchImages(currentSearch, currentPage, PER_PAGE);

    if (data.hits.length > 0) {
      createMarkup(data);
      lightbox.refresh();
      currentPage += 1;

      if (data.hits.length < PER_PAGE) {
        button.classList.replace('btn', 'load-more-hidden');
        console.log('lll');
      }
    } else {
      button.classList.replace('btn', 'load-more-hidden');
    }
  } catch (error) {
    console.log('Error fetching images:', error);
  } finally {
    loader.classList.add('hidden');
    button.disabled = false;
  }
}
