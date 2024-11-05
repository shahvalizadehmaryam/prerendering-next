import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <h3>pre rendering and data fetching in next.js</h3>
      <ul>
        {posts.map((postItem) => (
          <li key={postItem.id}>{postItem.title}</li>
        ))}
      </ul>
    </div>
  );
}
// this function run at build time.
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      posts: data,
    },
  };
}
