import style from "@/app/blog/blog.module.css";
import BlogPage from "@/components/blogPage";
import blogs from "@/app/blogdata";

export default function pokeman() {
  const blog = blogs.find((blog) => blog.title === "Me pokeman cards");

  if (!blog) {
    return <div>Blog not found.</div>;
  }
  return (
    <div>
      <div className={style.blogLayout}>
        <div className={style.blogCard}>
          <BlogPage {...blog} />
        </div>
      </div>
    </div>
  );
}
