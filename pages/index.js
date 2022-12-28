import Link from "next/link";
import { client } from "../libs/client";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div>
      {blog.map((blog) => (
        <div key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <p>{blog.tiitle}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
