import { useQuery } from "graphql-hooks";
import Header from "../layout/header";
import BlogList from "../components/blog-list";
import Footer from "../layout/footer";

const BLOG_QUERY = `
query {
  user(username: "elcharitas") {
    publication {
      posts(page: 0) {
        title
        brief
        slug
        coverImage
        dateAdded
      }
    }
  }
}
`;

const HomePage = () => {
    const { data } = useQuery(BLOG_QUERY);
    return (
        <div>
            <Header />
            <BlogList posts={data?.user.publication.posts || []} />
            <Footer />
        </div>
    );
};

export default HomePage;
