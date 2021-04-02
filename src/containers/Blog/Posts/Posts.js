import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import Post from '../../../components/Post/Post';
import './Posts.css';
import axiosInstance from "../../../axiosInstance";

class Posts extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axiosInstance.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                let posts = response.data;
                let updatedPosts = posts.slice(0, 4).map(post => {
                    return {
                        ...post,
                        author: "Max"
                    }
                })
                this.setState({posts: updatedPosts});
            })
    }


    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong !</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => (
                <Link to={'/' + post.id} key={post.id}>
                    <Post title={post.title}
                          author={post.author}
                    />
                </Link>))
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.object
}

export default Posts;