import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/app/blogdata";

export default function BlogPreview(props : Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div id="blog-container" className={style.blogContainer}>
      <h3>{props.title}</h3>
      <div>
        <Image src={props.image} alt={props.imageAlt} width={500} height={500}></Image>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <Link href={props.slug}>Learn More</Link>
      </div>
    </div>
  );
}
