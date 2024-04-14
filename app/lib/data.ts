'use server'

import axios, { AxiosError } from 'axios';
import { IOrderBody } from '@/app/lib/definitions';

export async function fetchReviews() {
  try {
    const res = await axios.get(process.env.DOMAIN_URL + '/reviews');
    return res.data;
  } catch (error) {
    console.error('Request error:', error);
    throw new Error('Failed to fetch reviews');
  }
}

export async function fetchProducts(pageParams: number) {
  try {
    const res = await axios.get(process.env.DOMAIN_URL + '/products', { params: {page: pageParams, page_size: 3} });
    
    return res.data.items;
  } catch (error) {
    console.error('Request error:', error);
    throw new Error('Failed to fetch products');
  }
}

export async function createOrder(body: IOrderBody) {
  try {
    const res = await axios.post(process.env.DOMAIN_URL + '/order', body);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 400) {
      return error.response.data;
    } else {
      console.error('Request error:', error);
      throw new Error('Failed to create order');
    }
  }
}
