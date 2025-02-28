// BlogPost.tsx (revised)
import React from "react";
import styles from "./BlogPost.module.css";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  date,
  imageUrl,
  link,
}) => {
  return (
    <article className={styles.post}>
      <a href={link} className={styles.imageLink}>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </div>
      </a>
      <div className={styles.content}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>
          <a href={link}>{title}</a>
        </h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <a href={link} className={styles.readMore}>
          Read More
        </a>
      </div>
    </article>
  );
};

export default BlogPost;
