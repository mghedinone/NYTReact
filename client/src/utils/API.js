import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Gets all books
  getGrades: function() {
    return axios.get("/api/grades");
  },
  // Gets the book with the given id
  getGrade: function(id) {
    return axios.get("/api/grades/" + id);
  },
  // Deletes the book with the given id
  deleteGrade: function(id) {
    return axios.delete("/api/grades/" + id);
  },
  // Saves a book to the database
  saveGrade: function(gradeData) {
    return axios.post("/api/grades", gradeData);
  },

// Gets all books
  getNews: function() {
    return axios.get("/api/news");
  },
  // Gets the book with the given id
  getNewz: function(id) {
    return axios.get("/api/news/" + id);
  },
  // Deletes the book with the given id
  deleteNews: function(id) {
    return axios.delete("/api/news/" + id);
  },
  // Saves a book to the database
  saveNews: function(newsData) {
    return axios.post("/api/news", newsData);
  },

};
