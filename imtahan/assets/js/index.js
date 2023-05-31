const barIcon= document.querySelector(".barIcon")


barIcon.addEventListener(("click"), ()=>{
    const navResponsiv=document.querySelector(".navResponsiv")
    navResponsiv.classList.toggle("openNav")
    console.log(navResponsiv)
})

function getAll() {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((elemenet) => {
          createCart(elemenet);
        });
      });
  }
  function createCart(data) {
    const fashionCarts = document.querySelector(".fashionCarts");
    const fashionCart = document.createElement("div");
    const foto = document.createElement("img");
    const fashiondate = document.createElement("p");
    const fashionhead = document.createElement("h4");
    const fashiontext = document.createElement("p");
    const fashionlikecommit = document.createElement("div");
    const like = document.createElement("p");
    const comment = document.createElement("p");
    const deleteCart = document.createElement("button");
  
    fashionCart.append(
      foto,
      fashiondate,
      fashionhead,
      fashiontext,
      fashionlikecommit,
      deleteCart
    );
    fashionlikecommit.append(like, comment);
  
    fashionCarts.appendChild(fashionCart);
    deleteCart.classList = "deleteCart";
    fashionCart.classList = "fashionCart";
    fashiondate.classList = "fashion-date";
    fashionhead.classList = "fashion-head";
    fashiontext.classList = "fashion-text";
    fashionlikecommit.classList = "fashion-like-commit";
    like.classList = "text";
    comment.classList = "text";
  
    foto.src = data.img;
    foto.classList="foto"
    deleteCart.innerText = "delete";
    fashiondate.innerText = data.date;
    fashionhead.innerText = data.title;
    fashiontext.innerText = data.text;
    like.innerText = data.like;
    comment.innerText = data.comment;
  
    deleteCart.onclick = () => {
        
      fetch("http://localhost:3000/posts/" + data.id, { method: "delete" })
        .then((res) => res.json())
        .then((result) => {
          fashionCarts.innerHTML ="";
          getAll();
        });
    };
  }
  
  getAll();