const btn = document.getElementById("btn");
const img = document.getElementById("img");
const date = document.getElementById("date");
const title = document.getElementById("title");
const text = document.getElementById("text");
const like = document.getElementById("like");
const comment = document.getElementById("comment");

btn.onclick = (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      img: img.value,
      date: date.value,
      title: title.value,
      text: text.value,
      like: like.value,
      comment: comment.value,
    }),
    cache: "default",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
