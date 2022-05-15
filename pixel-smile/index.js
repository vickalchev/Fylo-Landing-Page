"use strict";
const leanAnalytics = {
    title: "Lean Analytics: Use Data to Build a Better Startup Faster",
    author: "Alistair Croll",
    genre: "nonfiction",
    publicationYear: 2013,
    inStock: true,
    isbn: 45862,
};
const storeAdresses = [
    "123 Sheppard",
    "56 Dundas",
    "100 Cityview",
];
var BookGenres;
(function (BookGenres) {
    BookGenres["Fiction"] = "FICTION";
    BookGenres["ScienceFiction"] = "SCIENCE FICTION";
    BookGenres["Romance"] = "ROMANCE";
})(BookGenres || (BookGenres = {}));
const newBook = {};
