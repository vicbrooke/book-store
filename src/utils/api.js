const axios = require("axios");

const bookStoreAPI = axios.create({ baseURL: "http:localhost:5001" });

export const getBooks = () => {
  return bookStoreAPI.get("/books").then(({ data }) => {
    return data.allBooks;
  });
};

export const getSingleBook = (id) => {
  return bookStoreAPI.get(`/books/${id}`).then(({ data }) => {
    return data.singleBook;
  });
};

export const getBooksByGenre = (genre) => {
  return bookStoreAPI.get(`/books/genres/${genre}`).then(({ data }) => {
    return data.booksByGenre;
  });
};

export const postBook = (newBook) => {
  return bookStoreAPI.post("/books", newBook).then(({ data }) => {
    return data.newBook;
  });
};

export const updateBook = (id, newInfo) => {
  return bookStoreAPI.put(`/books/${id}`).then(({ data }) => {
    return data.updatedBook;
  });
};

export const deleteBook = (id) => {
  return bookStoreAPI.delete(`/books/${id}`).then(({ data }) => {
    return data.msg;
  });
};
