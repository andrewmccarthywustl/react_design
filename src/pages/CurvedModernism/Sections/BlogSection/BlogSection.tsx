// Sections/BlogSection/BlogSection.tsx
import React from "react";
import styles from "./BlogSection.module.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import BlogPost from "../../Components/BlogPost/BlogPost";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  link: string;
}

interface BlogSectionProps {
  id?: string;
  title: string;
  posts: Post[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ id, title, posts }) => {
  return (
    <section id={id} className={styles.blogSection}>
      <SectionTitle text={title} />

      <div className={styles.grid}>
        {posts.map((post, index) => (
          <div key={index} className={styles.postItem}>
            <BlogPost
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              imageUrl={post.imageUrl}
              link={post.link}
            />
          </div>
        ))}
      </div>

      <div className={styles.viewAllContainer}>
        <a href="#" className={styles.viewAllButton}>
          View All Articles
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
