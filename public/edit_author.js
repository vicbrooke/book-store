const url = "http://localhost:5001";
const h3 = document.querySelector("#edit-author");
const submitAuthorBtn = document.querySelector(".submit-author");

const authorId = window.location.href.split("=")[1];

async function showAuthorName() {
  const response = await fetch(`${url}/authors/${authorId}`);
  const author = await response.json();

  h3.innerText = `You are editing ${author.name}`;
}
showAuthorName();

submitAuthorBtn.addEventListener("click", async () => {
  const name = document.getElementById("authorName").value;
  const image = document.getElementById("authorImage").value;

  const body = {};

  if (name !== "") {
    Object.assign(body, { name: name });
  }
  if (image !== "") {
    Object.assign(body, { image: image });
  }

  console.log(body);

  await fetch(`${url}/authors/${authorId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
});
