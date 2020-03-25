import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import Axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
        }
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

    handleFormChange = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost }
        console.log(event.target.name)
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            console.log('value obj formBlogPost:', this.state.formBlogPost)
        })
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit">Simpan</button>
                </div>
                {this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handleRemove} />
                })}
            </Fragment>
        )
    }
}

export default BlogPost;