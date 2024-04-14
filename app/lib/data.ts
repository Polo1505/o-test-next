'use server'

import axios, { AxiosError } from 'axios';
import { IOrderBody } from '@/app/lib/definitions';

export const fetchReviews = (async () => {
  try {
    const res = await axios.get(process.env.VERCEL_URL + '/reviews');
    return res.data;
  } catch (error) {
    console.error('Request error:', error);
    // throw new Error('Failed to fetch reviews');
    return {items:[{
      id: 1,
      text: ""
    },]};
  }
})

export const fetchProducts = (async (pageParams: number) =>{
  try {
    const res = await axios.get(process.env.VERCEL_URL + '/products', { params: {page: pageParams, page_size: 3} });
    
    return res.data.items;
  } catch (error) {
    console.error('Request error:', error);
    throw new Error('Failed to fetch products');
  }
})

export const createOrder = (async (body: IOrderBody) => {
  try {
    const res = await axios.post(process.env.VERCEL_URL + '/order', body);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 400) {
      return error.response.data;
    } else {
      console.error('Request error:', error);
      throw new Error('Failed to create order');
    }
  }
})
