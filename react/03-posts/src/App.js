import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    posts: null
  };
  componentDidMount() {
    axios.get(`http://localhost:4000`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }
  render() {
    return (
      <div>
        {this.state.posts &&
          this.state.posts.map((post, idx) => {
            return (
              <div>
                <h3>{post.title}</h3>
              </div>
            );
          })}
      </div>
    );
  }
}
export default App;
