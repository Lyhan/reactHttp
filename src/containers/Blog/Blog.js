import React, { Component } from 'react';
import {Route,NavLink,Switch} from 'react-router-dom';

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import  './Blog.css';
import FullPost from "./FullPost/FullPost";

/*
NavLink adds "active" css class
To pass routing props use hoc 'withRouter' to wrap components
 */
class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Blog">
                    <ul>
                        <li><NavLink
                            to="/"
                            exact
                            activeClassName="my-custom-class"
                            activeStyle={{
                                textDecoration:'underline',
                                color: '#fa923f'
                            }}

                        >Home</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-post',
                            hash: '#myhash',
                            search: '?query=params'
                        }}>New Post</NavLink></li>
                    </ul>
                </header>
                <Route path="/" exact component={Posts}/>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;