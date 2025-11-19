import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview(props: any) {
  let content;

  if (!props) {
    return (
      <div id="blog-container" className={style.blogContainer}>
        <h3>No blogs were found!</h3>
      </div>
    );
  }

  if (props.slug && !props.isActive) {
    content = <Link href={props.slug}>Learn More</Link>;
  } else {
    content = <Link href="/blog">Back</Link>;
  }
  return (
    <div id="blog-container" className={style.blogContainer}>
      <h3>{props.title}</h3>
      <div>
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={500}
          height={500}
        ></Image>
        <p>{props.description}</p>
        <p>{new Date(props.date).toDateString()}</p>
        {content}
      </div>
    </div>
  );
}
