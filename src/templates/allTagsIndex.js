import React from "react"
import { Link } from 'gatsby';

const AllTagsTemplate = ({pageContext: { tags }}) => {
  return (
    <div>
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
    </div>
  );
}

export default AllTagsTemplate;
