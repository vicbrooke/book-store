const url = "http://localhost:5001";
const authorsContainer = document.querySelector(".authors-container");

const showAuthors = async () => {
  const response = await fetch(`${url}/authors`, { method: "GET" });
  const allAuthors = await response.json();
  allAuthors.map((author) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<h3>${author.name}</h3> <img src=${author.image} class='author-image'><button class='view-books-btn' onclick=viewBooks(${author.id})>View books</button>`;
    listItem.className = "author-info";
    authorsContainer.append(listItem);
  });
};

showAuthors();

const viewBooks = async (id) => {
  const response = await fetch(`${url}/authors/${id}/books`);
  const books = await response.json();
  authorsContainer.innerHTML = "";
  const link = document.createElement("a");
  link.setAttribute("href", "view_authors.html");
  link.innerText = "Go back to Authors page";
  authorsContainer.append(link);
  authorsContainer.className = "author-books";
  books.map((book) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<h3>${book.title}</h3> <img src="${book.image}" class="book-image"> <p>Genre: ${book.genre}</p> <p>Price: ${book.price}</p> <p>Rating: ${book.rating}</p> <p>Reviews: ${book.reviews}</p>`;

    authorsContainer.append(listItem);
  });
};
