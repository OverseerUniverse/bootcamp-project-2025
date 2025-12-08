import style from "./blog.module.css";
import BlogPreview from "@/components/blogPreview";
import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

async function getBlogs() {
  await connectDB();
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function blog({ params }: IParams) {
  // Fetch blogs using your function
  const blogs = await getBlogs();

  if (!blogs) {
    return <div>No blogs found.</div>;
  }
  return (
    <div>
      <h1 className="pageTitle">😌 Blog</h1>
      <div className={style.blogContainer}>
        {blogs.map((blog: any, index: number) => (
          <BlogPreview {...blog.toObject()} key={index} />
        ))}
      </div>
    </div>
  );
}
