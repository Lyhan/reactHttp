import React from "react";
import PropTypes from 'prop-types';
import {Link, Route} from "react-router-dom";

import Post from '../../../components/Post/Post';
import './Posts.css';
import axiosInstance from "../../../axiosInstance";
import FullPost from "../FullPost/FullPost";

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

    // Programmatic navigation
    postSelectedHanlder(id) {
        // this.props.history.push('/' + id);
        this.props.history.push({pathname: '/posts/' + id});
    }


    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong !</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => (
                // <Link to={'/' + post.id} key={post.id}>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHanlder(post.id)}
                />
                // </Link>
            ))
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={ this.props.match.url + '/:id'} component={FullPost}/>
            </div>
        )
    }

}

Posts.propTypes = {
    posts: PropTypes.object
}

export default Posts;