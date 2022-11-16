const url = "http://localhost:5001";
const bookList = document.querySelector(".book-list");
const bookContainer = document.querySelector(".book-container");

document.addEventListener("DOMContentLoaded", (e) => {
  fetch(`${url}/books`)
    .then((res) => res.json())
    .then(({ allBooks }) =>
      allBooks.map((book) => {
        const listItem = document.createElement("li");
        const title = document.createElement("h3");
        const image = document.createElement("img");
        image.setAttribute("class", "book-image");
        const genre = document.createElement("p");
        const price = document.createElement("p");
        const rating = document.createElement("p");
        const reviews = document.createElement("p");
        title.innerText = book.title;
        image.src = book.image;
        genre.innerText = `Genre: ${book.genre}`;
        price.innerText = `Price: ${book.price}`;
        rating.innerText = `Rating: ${book.rating}`;
        reviews.innerText = `Reviews: ${book.reviews}`;
        listItem.append(title, image, genre, price, rating, reviews);
        bookContainer.append(listItem);
      })
    );
});
