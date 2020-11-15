import React from "react";
import "./Post.css"

    class Post extends React.Component {
      render() {
        return <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src="https://wallpaperaccess.com/full/905109.jpg" />
              </div>
            </div>
          </article>;
        }
    }
    export default Post;