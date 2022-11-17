const url = "http://localhost:5001";
const bookContainer = document.querySelector(".book-container");
const genreDropdown = document.querySelector("#genre");
const genreBtn = document.querySelector(".genre-btn");
const addBookBtn = document.querySelector(".add-book-btn");

document.addEventListener("DOMContentLoaded", (e) => {
  // fetch runs in the browser so needs to be in a script.js file
  fetch(`${url}/books`)
    .then((res) => res.json())
    .then(({ allBooks }) =>
      allBooks.map((book) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<h3>${book.title}</h3> <img src="${book.image}" class="book-image"> <p>Genre: ${book.genre}</p> <p>Price: ${book.price}</p> <p>Rating: ${book.rating}</p> <p>Reviews: ${book.reviews}</p>`;
        bookContainer.append(listItem);
      })
    );
});

async function setGenres() {
  let genreList = [];
  await fetch(`${url}/books`)
    .then((res) => res.json())
    .then(({ allBooks }) => allBooks.map((book) => genreList.push(book.genre)));
  let genres = [...new Set(genreList)];
  genres.sort();
  genres.map((genre) => {
    const option = document.createElement("option");
    option.innerText = genre;
    option.setAttribute("value", genre);
    genreDropdown.append(option);
  });
}

setGenres();

genreBtn.addEventListener("click", () => {
  const value = document.querySelector("#genre").value;
  bookContainer.innerHTML = "";
  fetch(`${url}/books/genres/${value}`)
    .then((res) => res.json())
    .then(({ booksByGenre }) =>
      booksByGenre.map((book) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<h3>${book.title}</h3> <img src="${book.image}" class="book-image"> <p>Genre: ${book.genre}</p> <p>Price: ${book.price}</p> <p>Rating: ${book.rating}</p> <p>Reviews: ${book.reviews}</p>`;
        bookContainer.append(listItem);
      })
    );
});
