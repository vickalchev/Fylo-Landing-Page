type Book = {
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  inStock: boolean;
  isbn: number;
};

const leanAnalytics: Book = {
  title: "Lean Analytics: Use Data to Build a Better Startup Faster",
  author: "Alistair Croll",
  genre: "nonfiction",
  publicationYear: 2013,
  inStock: true,
  isbn: 45862,
};

type StoreLocations = [string, string, string];

const storeAdresses: StoreLocations = [
  "123 Sheppard",
  "56 Dundas",
  "100 Cityview",
];

enum BookGenres {
  Fiction = "FICTION",
  ScienceFiction = "SCIENCE FICTION",
  Romance = "ROMANCE",
}

const newBook = {};
