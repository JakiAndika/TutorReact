import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import Axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        Axios.get('http://localhost:3004/posts')
            .then((result) => {
                this.setState({
                    post: result.data
                })
            })
    }

    handleRemove = (data) => {
        Axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
        this.getPostAPI()
        })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handleRemove} />
                })}
            </Fragment>
        )
    }
}

export default BlogPost;