var blogs = [
  {
    title: "Title 4 blog!@",
    date: "08/13/2025",
    description: "This is me!!",
    image: "./images/mewithcats.jpg",
    imageAlt: "me with cats",
    slug: "file:///Users/overseer/college/Hack4Impact/bootcamp-project-2025/blog/MyLife2025!",
  },
  {
    title: "My Past Projects!",
    date: "08/13/2025",
    description: "I made some cool stuff while being alive",
    image: "./images/domocat.jpg",
    imageAlt: "cats with domos",
    slug: "file:///Users/overseer/college/Hack4Impact/bootcamp-project-2025/blog/Programming2025!",
  },
];
function appendBlogs() {
  blogs.forEach(function (blog) {
    var newDiv = document.createElement("div");
    newDiv.className = "post-container";
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var header = document.createElement("h1");
    header.innerHTML = blog.title;
    var text = document.createElement("p");
    text.innerText = blog.description;
    newDiv.appendChild(header);
    newDiv.appendChild(image);
    newDiv.appendChild(text);
    var blogContainer = document.getElementById("blog-container");
    if (blogContainer) {
      blogContainer.appendChild(newDiv);
    } else {
      console.error("blog container not found");
    }
  });
}
appendBlogs();
