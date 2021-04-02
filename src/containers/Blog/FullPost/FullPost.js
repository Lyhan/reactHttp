import React, {Component} from 'react';
import axios from "axios";

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null,
        error: false
    }

    /*
    // This is how to extract query params
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log(param); // yields ['start', '5']
        }
    }
     */

    componentDidMount() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data})
                    }).catch(err => {
                    this.setState({error: true})
                })
            }
        }
    }

    postDeleteHandler = () => {
        axios.delete('/posts/' + this.state.loadedPost.id)
            .then(response => console.log(response));
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        console.log(this.props)
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading... !</p>
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.postDeleteHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;