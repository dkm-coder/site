import React from "react"
import { Link } from 'gatsby';
import Layout from '../components/Layout'

const AllTagsTemplate = ({pageContext: { tags }}) => {
  return (
    <Layout>
      <div>
        List of available tags:
        <ul>
          {tags.map((tagName, index) => {
            return (
              <li key={index}>
                <Link to={`${tagName}`}>
                  {tagName}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <br />
      <Link to="/">Home</Link>
    </Layout>
  );
}

export default AllTagsTemplate;
