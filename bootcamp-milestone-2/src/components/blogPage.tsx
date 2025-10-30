import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/app/blogdata";

export default function BlogPage({
  title,
  image,
  imageAlt,
  description,
  date,
}: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div id="blog-container" className={style.blogContainer}>
      <h3>{title}</h3>
      <div>
        <Image src={image} alt={imageAlt} width={500} height={500}></Image>
        <p>{description}</p>
        <p>{date}</p>
        <Link href="/blog">Back</Link>
      </div>
    </div>
  );
}