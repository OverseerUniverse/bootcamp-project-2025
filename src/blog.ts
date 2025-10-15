type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
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
  blogs.forEach((blog) => {
    const newDiv = document.createElement("div");
    newDiv.className = "post-container";

    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    const header = document.createElement("h1");
    header.innerHTML = blog.title;

    const text = document.createElement("p");
    text.innerText = blog.description;

    newDiv.appendChild(header);
    newDiv.appendChild(image);
    newDiv.appendChild(text);

    const blogContainer = document.getElementById("blog-container");
    if (blogContainer) {
      blogContainer.appendChild(newDiv);
    } else {
      console.error("blog container not found");
    }
  });
}

appendBlogs();
