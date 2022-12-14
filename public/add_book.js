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

  const body = {};
  if (title !== "") {
    let words = title.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    words = words.join(" ");
    console.log(words);
    Object.assign(body, { title: words });
  }
  if (author !== "") {
    Object.assign(body, { author: author });
  }
  if (image !== "") {
    Object.assign(body, { image: image });
  }
  if (genre !== "") {
    Object.assign(body, { genre: genre.toLowerCase() });
  }
  if (price !== "") {
    const newPrice = Number(price).toFixed(2);
    console.log(newPrice, typeof newPrice);
    Object.assign(body, { price: newPrice });
  }
  if (rating !== "") {
    Object.assign(body, { rating: rating });
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
  <h2>Congrats, your book was added!</h2>
  <div class="book-title">${newBook.title}</div>
  <p>Go to the <a href="index.html">home page</a> to view all books.</p>
  `;
      newBookContainer.appendChild(addedBook);
    });
});
