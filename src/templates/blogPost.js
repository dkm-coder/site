import React from 'react';
// import { graphql } from 'gatsby';

const BlogPost = ({ pageContext: { pathSlug } }) => (
  <div>
    {pathSlug}
  </div>
);

export default BlogPost;