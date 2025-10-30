export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Title 4 blog!@",
    date: "08/13/2025",
    description: "This is me!!",
    image: "/images/mewithcats.jpg",
    imageAlt: "me with cats",
    slug: "/blog/about",
  },
  {
    title: "My Past Projects!",
    date: "08/13/2025",
    description: "I made some pretty cool things",
    image: "/images/domocat.jpg",
    imageAlt: "cats with domos",
    slug: "/blog/project",
  },
  {
    title: "Me pokeman cards",
    date: "08/28/2025",
    description: "Not to flex or anything like that",
    image: "/images/pokedrip.jpg",
    imageAlt: "my card collection",
    slug: "/blog/pokeman",
  },
];

export default blogs;
