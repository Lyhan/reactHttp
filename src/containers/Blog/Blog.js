import React, { Component } from 'react';
import {Route,NavLink,Switch} from 'react-router-dom';

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import  './Blog.css';
import FullPost from "./FullPost/FullPost";
import {Redirect} from "react-router";

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
                            to="/posts"
                            exact
                            activeClassName="my-custom-class"
                            activeStyle={{
                                textDecoration:'underline',
                                color: '#fa923f'
                            }}

                        >Posts</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-post',
                            hash: '#myhash',
                            search: '?query=params'
                        }}>New Post</NavLink></li>
                    </ul>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                    {/*Multiple Routes pointing to same Component is ok*/}
                    {/*<Route path="/" component={Posts}/>*/}
                    <Redirect from="/" to="/posts"/>
                </Switch>
            </div>
        );
    }
}

export default Blog;