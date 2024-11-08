'use strict';

import axios from 'axios';

export async function fetchImages(searchValue, page = 1, perPage = 15) {
  const API_KEY = '46805132-7b6e04e5dd5e788bcfb9e4740';

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
