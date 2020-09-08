import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
    {/* <Link as={`${title}`.replace(" ", "-")} href={`/post?title=${title}`}> */}
      <a>{title}</a>
    </Link>
  </li>
);
const Blog = () => (
  <Layout title="Tech Blog">
    <ul>
      <PostLink slug="Vue-Sprites" title="Vue Sprites" />
      <PostLink slug="React-Flush" title="React Flush" />
      <PostLink slug="Angular-Sparks" title="Angular Sparks" />
    </ul>
  </Layout>
);

export default Blog;
