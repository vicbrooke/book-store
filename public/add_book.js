const submitBookBtn = document.querySelector(".submit-book");
const newBookContainer = document.querySelector(".new-book-container");
const url = "http://localhost:5001";

submitBookBtn.addEventListener("click", async () => {
  const title = document.getElementById("bkTitle").value;
  const author = document.getElementById("bkAuthor").value;
  const image = document.getElementById("bkImage").value;
  const genre = document.getElementById("bkGenre").value;
  const price = document.getElementById("bkPrice").value;
  const rating = document.getElementById("bkRating").value;
  const reviews = document.getElementById("bkReviews").value;

  const body = {};
  if (title !== "") {
    Object.assign(body, { title: title });
  }
  if (author !== "") {
    Object.assign(body, { author: author });
  }
  if (image !== "") {
    Object.assign(body, { image: image });
  }
  if (genre !== "") {
    Object.assign(body, { genre: genre });
  }
  if (price !== "") {
    Object.assign(body, { price: price });
  }
  if (rating !== "") {
    Object.assign(body, { rating: rating });
  }
  if (reviews !== "") {
    Object.assign(body, { reviews: reviews });
  }
  await fetch(`${url}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ newBook }) => {
      const addedBook = document.createElement("div");
      addedBook.innerHTML = `
  <h3>Congrats, your book was added!</h3>
  <div class="book-title">${newBook.title}</div>
  <p>Go to the <a href="index.html">home page</a> to view all books.</p>
  `;
      newBookContainer.appendChild(addedBook);
    });
});
