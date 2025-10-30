import style from "./blog.module.css";
import BlogPreview from "@/components/blogPreview";
import blogs from "../blogdata";

export default function blog() {
  return (
    <div>
      <h1 className="pageTitle">😌 Blog</h1>
      <div className={style.blogContainer}>
        {blogs.map((blog, index) => (
          <BlogPreview key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}
