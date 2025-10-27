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
    image: "../images/mewithcats.jpg",
    imageAlt: "me with cats",
    slug: "blog-about-me.html",
  },
  {
    title: "My Past Projects!",
    date: "08/13/2025",
    description: "I made some pretty cool things",
    image: "../images/domocat.jpg",
    imageAlt: "cats with domos",
    slug: "blog-projects.html",
  },
];

const mainBlogPage = document.getElementById("blog-container");

function constructBlogPage() {
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

    const learnMore = document.createElement("p");
    learnMore.innerText = "Learn More";

    const link = document.createElement("a");
    link.href = blog.slug;

    newDiv.appendChild(header);
    newDiv.appendChild(image);
    newDiv.appendChild(text);
    newDiv.appendChild(link);
    link.appendChild(learnMore);

    if (mainBlogPage) {
      mainBlogPage.appendChild(newDiv);
    } else {
      console.error("blog container not found");
    }
  });
}

function constructBlogPages() {
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    if (blog) {
      const title = document.createElement("title");
      title.innerHTML = blog.title;

      const headerTag = document.createElement("h1");
      headerTag.innerHTML = blog.title;

      const datePosted = document.createElement("p");
      datePosted.innerHTML = blog.date;

      const image = document.createElement("img");
      image.src = blog.image;
      image.alt = blog.imageAlt;

      const leftDiv = document.createElement("div");
      leftDiv.className = "left";
      leftDiv.appendChild(headerTag);
      leftDiv.appendChild(image);

      const description = document.createElement("p");
      description.innerHTML = blog.description;

      const rightDiv = document.createElement("div");
      rightDiv.className = "right";
      rightDiv.appendChild(datePosted);
      rightDiv.appendChild(description);

      const blogTitle = document.getElementById("blog-title");
      if (blogTitle) {
        blogTitle.appendChild(title);
      }

      const blogAboutMe = document.getElementById("blog-about-me");
      const blogProjects = document.getElementById("blog-projects");

      if (blog.slug == "blog-about-me.html" && blogTitle && blogAboutMe) {
        blogAboutMe.appendChild(leftDiv);
        blogAboutMe.appendChild(rightDiv);
        blogAboutMe.appendChild(blogTitle);
      }
      if (blog.slug == "blog-projects.html" && blogTitle && blogProjects) {
        blogProjects.appendChild(leftDiv);
        blogProjects.appendChild(rightDiv);
        blogProjects.appendChild(blogTitle);
      }
    }
  }
}

//
if (mainBlogPage) {
  constructBlogPage();
} else {
  constructBlogPages();
}
