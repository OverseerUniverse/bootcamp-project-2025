interface Blog {
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

export default blogs;