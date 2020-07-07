import React from "react"
import { Link } from 'gatsby';
import Layout from '../components/Layout'

const SingleTagTemplate = ({pageContext: { posts, tagName }}) => {
    return (
    <Layout>
      <div>
        Posts about '{`${tagName}`}'
      </div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <small>You can also go back to the list of <Link to="..">Tags</Link></small>
      </div>
      <br />
      <Link to="/">Home</Link>
    </Layout>
  );
}

export default SingleTagTemplate;
