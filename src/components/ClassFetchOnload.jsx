import React, { Component } from "react";
import { Container, Media } from "reactstrap";
class ClassFetchOnload extends Component {
  constructor(props) {
    super(props);
    this.state = { blogPostData: [] };
  }
  fetchBlogData = async () => {
    const url = "https://jsonplaceholder.typicode.com/comments?postId=1";
    const response = await fetch(url);
    const jsonResponse = await response.json();
    this.setState({ blogPostData: jsonResponse });
  };
  componentDidMount() {
    this.fetchBlogData();
  }
  render() {
    return (
      <Container>
        <h3>From the Class Component and </h3>
        {this.state.blogPostData?.map((data) => (
          <Media>
            <Media left href="#">
              <Media
                object
                src="https://picsum.photos/60"
                alt="Generic placeholder image"
                style={{ marginRight: "10px" }}
              />
            </Media>
            <Media body>
              <Media heading>{data.name.toUpperCase()}</Media>
              {data.body}.
              <p>
                Email: <a href={`mailto:${data.email}`}>{data.email}</a>
              </p>
            </Media>
          </Media>
        ))}
      </Container>
    );
  }
}
export default ClassFetchOnload;