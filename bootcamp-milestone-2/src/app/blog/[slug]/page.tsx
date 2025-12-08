import style from "../blog.module.css";
import BlogPreview from "@/components/blogPreview";
import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";
import Comment from "@/components/comment";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function blog({ params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const blog = await Blog.findOne({ slug: `/blog/${slug}` }).orFail();
    const comments = (blog.toObject().comments ?? []) as any[];

    return (
      <div>
        <div className={style.blogLayout}>
          <div className={style.blogCard}>
            <BlogPreview {...blog.toObject()} isActive={true} />
          </div>
          <br />
          <h1>COMMENTS</h1>
          <br />
          <div className={style.blogCard}>
            {comments.map((c: any, index: number) => (
              <Comment comment={c} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (err) {
    return <div>Blog not found.</div>;
  }
}
