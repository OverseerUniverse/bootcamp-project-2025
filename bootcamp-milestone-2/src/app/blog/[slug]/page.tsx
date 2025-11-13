import style from "../blog.module.css";
import BlogPreview from "@/components/blogPreview";
import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";

type IParams = {
  params: {
    slug: string;
  };
};

export default async function blog({ params }: IParams) {
  //const blog = blogs.find((blog) => blog.title === "My Past Projects!");
  await connectDB();
  const { slug } = params;

  try {
  const blog = await Blog.findOne({ slug: `/blog/${slug}` }).orFail();
  return (
    <div>
      <div className={style.blogLayout}>
        <div className={style.blogCard}>
          <BlogPreview {...blog.toObject()} />
        </div>
      </div>
    </div>
  );
  } catch (err) {
   return <div>Blog not found.</div>;
  }
}
