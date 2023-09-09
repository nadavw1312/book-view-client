import axios from "axios";
import { IBook, IBookCreate } from "../types/book";

export const getBooks = () => {
  return axios.get<IBook[]>(`${import.meta.env.VITE_API_URL}/books`);
};

export const getBook = (id: string) => {
  return axios.get(`${import.meta.env.VITE_API_URL}/books/${id}`);
};

export const updateBook = (id: string, book: IBookCreate) => {
  return axios.put(`${import.meta.env.VITE_API_URL}/books/${id}`, book);
};

export const deleteBook = (id: string) => {
  return axios.delete(`${import.meta.env.VITE_API_URL}/books/${id}`);
};

export const createBook = (book: IBookCreate) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/books/create`, book);
};
