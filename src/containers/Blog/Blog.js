import React, { Component } from 'react';
import {Route,NavLink,Switch} from 'react-router-dom';

import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import  './Blog.css';
import FullPost from "./FullPost/FullPost";
import {Redirect} from "react-router";
import asyncComponent from '../../hoc/asyncComponent';

/*
NavLink adds "active" css class
To pass routing props use hoc 'withRouter' to wrap components
 */

const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');
});
class Blog extends Component {
    state = {
        auth: true
    }
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
                    {/*Guard against Unauthenticated users, if component isn't rendered,
                     there is no way to reach it */}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null }
                    <Route path="/posts" component={Posts}/>
                    {/*Multiple Routes pointing to same Component is ok*/}
                    <Route path="/" exact component={Posts}/>
                    {/*<Redirect from="/" to="/posts"/>*/}
                    {/*Catch all routes not found, it does not work with Redirect from='/'*/}
                    <Route render={()=><h1 style={{textAlign:'center'}}>Not found</h1>}/>

                </Switch>
            </div>
        );
    }
}

export default Blog;