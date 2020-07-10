import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import photo from "../images/dave-martinez.jpeg"

const useStyles = makeStyles(() => ({
  image: {
    width: '280px',
    height: '280px',
    borderRadius: '16px',
    backgroundColor: 'lightgreen',
  },
}));

const ComponentToRender = ({data: {site: {siteMetadata: {title, description}}}}) => {
  const classes = useStyles();

  return (
    <div>
      <img className={classes.image} src={photo} alt="Dave Martinez Picture" />
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
};

const PersonalInfo = () => {
  return (
    <StaticQuery
    query={graphql`
        query {
        site {
            siteMetadata {
            title
            description
            }
        }
        }
    `}
    render={data => (
        <ComponentToRender data={data} />
    )}
    />
  );
};

export default PersonalInfo;