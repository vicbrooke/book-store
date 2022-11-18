const url = "http://localhost:5001";
const authorsContainer = document.querySelector(".authors-container");

const showAuthors = async () => {
  const response = await fetch(`${url}/authors`, { method: "GET" });
  const allAuthors = await response.json();
  allAuthors.map((author) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <h3>${author.name}</h3> 
    <img src=${author.image} class='author-image'> 
    <input type="button" onclick="location.href='edit_author.html?author=${author.id}';" value="Edit author" />
   
    <button class='view-books-btn' onclick=viewBooks(${author.id})>View books</button>`;
    listItem.className = "author-info";
    authorsContainer.append(listItem);
  });
};

showAuthors();

const viewBooks = async (id) => {
  const response = await fetch(`${url}/authors/${id}/books`);
  const books = await response.json();
  authorsContainer.innerHTML = "";
  const bookLink = document.createElement("a");
  bookLink.setAttribute("href", "view_authors.html");
  bookLink.innerText = "Go back to Authors page";
  authorsContainer.append(bookLink);
  const bookContainer = document.createElement("div");
  bookContainer.className = "book-container";
  authorsContainer.className = "author-books";
  books.map((book) => {
    const listItem = document.createElement("li");
    listItem.className = "book-item";
    listItem.innerHTML = `<h3>${book.title}</h3> <img src="${book.image}" class="book-image"> <p>Genre: ${book.genre}</p> <p>Price: ${book.price}</p> <p>Rating: ${book.rating}</p> <p>Reviews: ${book.reviews}</p>`;
    bookContainer.append(listItem);
    authorsContainer.append(bookContainer);
  });
};
