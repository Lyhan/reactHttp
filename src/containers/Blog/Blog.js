import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                let posts = response.data;
                let updatedPosts = posts.slice(0,4).map(post =>{
                    return {
                        ...post,
                        author: "Max"
                    }
                })
                this.setState({posts:updatedPosts});
            })
    }
    postSelectedHandler = (id)=>{
        this.setState({selectedPostId: id})
    }
    render () {
        let {posts} = this.state;
        return (
            <div>
                <section className="Posts">
                    {this.state.posts.map(post=>(
                        <Post title={post.title}
                              author={post.author}
                              clicked={()=>this.postSelectedHandler(post.id)}
                        />))}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;