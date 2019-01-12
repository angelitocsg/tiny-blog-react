import React, { Component } from 'react'
import BlogIndex from '../blog/pages/IndexPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogForm from '../blog/pages/BlogForm';
import BlogPostFull from '../blog/pages/BlogPostFull';
import { blogPosts } from '../blog/data/blogPosts';

//, Route, Switch
// class App extends Component {
//     constructor(props) {
//         super(props);
//     }

//     handleClick(event, color) {
//         event.target.style.background = color;
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <button onClick={(e) => this.handleClick(e,'yellow')}>Clique aqui</button>
//             </div>
//         )
//     }
// }

// const App = (props) => {
//     let greetings = `Hello ${props.user}!`;

//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <h3>{greetings}</h3>
//         </div>
//     )
// }

// const App = (props) => (
//     <h1>{props.title}</h1>
// )

// const App = (props) => (
//     <div>
//         <h1>{props.title}</h1>
//         <h2 className="small">{props.subtitle}</h2>
//     </div>
// )

// export default App

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            subtitle: props.subtitle,
            posts: blogPosts,
            tempPost: {}
        }

        console.log('app reloaded')

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        let post = {
            ...this.state.tempPost,
            tags: [this.state.tempPost.tags],
            date: new Date().toLocaleString('en-US'),
            id: this.state.posts.length + 1
        }

        if (post.title !== undefined && post.title !== '' &&
            post.tags !== undefined && post.tags !== '' &&
            post.content !== undefined && post.content !== '') {

            this.setState({
                ...this.state,
                posts: [
                    ...this.state.posts,
                    post
                ],
                tempPost: {}
            })
            alert('Certo! Tá adicionado')
        } else {
            alert('Tá errado! Preencha certo!')
        }
    }

    handleUpdate(id, post) {

    }

    handleFieldChange(event) {
        console.table(this.state.tempPost)
        this.setState(
            {
                ...this.state,
                tempPost: {
                    ...this.state.tempPost,
                    [event.target.name]: event.target.value
                }
            }
        )
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <h1>{this.state.title}</h1>
                    <h2 className="small">{this.state.subtitle}</h2>
                    <hr />

                    <Link to="/">[Home]</Link> {' '}
                    <Link to="/post/add">[Add Post]</Link>

                    <hr />

                    <Switch>
                        <Route exact path='/' component={() => BlogIndex(this.state.posts)} />
                        <Route path='/post/add' component={() => BlogForm({
                            onFieldChange: this.handleFieldChange,
                            onSaveClick: this.handleAdd,
                            tempPost: this.state.tempPost
                        })} />
                        <Route path='/post/:id' component={({ match }) => BlogPostFull(this.state.posts, { match })} />
                        <Route component={() => (<div>404 - Not Found</div>)} />
                    </Switch>
                </div>
            </Router>
        )
    }
}