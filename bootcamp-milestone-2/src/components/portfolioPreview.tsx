import React from "react";
import style from "./portfolioPreview.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPreview(props: any) {
  let content;

  if (!props) {
    return (
      <div id="portfolio-container" className={style.portfolio}>
        <h3>No Portfolios were found!</h3>
      </div>
    );
  }
  return (
    <div className={style.project}>
      <Link href={props.slug}>
        <Image
          src={props.image}
          alt={props.imagealt}
          width={500}
          height={500}
        />
      </Link>
      <div className={style.projectDetails}>
        <p className={style.projectName}>{props.title}</p>
        <p className={style.projectDescription}>{props.description}</p>
      </div>
    </div>
  );
}
