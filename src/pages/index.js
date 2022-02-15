import React, { Fragment, useState } from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const filterPosts = (posts, id = false) => {
    let p = [...posts].filter((post) => {
      let tags = post.metadata.tags.filter((tag) => {
        return id.indexOf(tag.id) >= 0;
      });

      return tags.length;
    });

    return p;
  }

  const tags = data.allContentfulTag.nodes;
  const posts = data.allContentfulBlog.nodes
  const [jobs, setJobs] = useState([]);

  const handleChange = (id, value) => {
    let arr = [...jobs];

    if(value) {
      arr.push(id);
    } else {
      arr.splice(arr.indexOf(id), 1);
    }

    arr.filter((value, index, self) => {
      return self.indexOf(value) === index
    });

    setJobs(arr);
  }

  return (
    <Fragment>
      <h1>Welcome!</h1>
      <ul>
        {tags.map((tag) => {
          return (
            <li key={tag.id}>
              <label>
                <input type="checkbox" name="jobs" value={tag.id} checked={(jobs.indexOf(tag.id) >= 0)} onChange={(e) => handleChange(tag.id, e.target.checked)}></input>{tag.name.replace(/.+:/, '')}
              </label>
            </li>
          );
        })}
      </ul>

      <div>
        {filterPosts(posts, jobs).map((post) => {
          return (
            <section key={post.id}>{post.title}</section>
          )
        })}
      </div>
    </Fragment>
  );
};

export const query = graphql`
query {
  allContentfulBlog {
    nodes {
      title
      id
      slug
      publishDate
      new
      gatsbyPath(filePath:"/blog/{contentfulBlog.slug}")
      billboard {
        description
        gatsbyImageData(width: 300)
      }
      metadata {
        tags {
          name
          id: contentful_id
        }
      }
    }
  }
  allContentfulTag(filter: {name: {regex: "/^job:/"}}) {
		nodes {
      name
      id: contentful_id
    }
  }
}
`;

export default IndexPage;