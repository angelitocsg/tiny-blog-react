import React, { Component } from 'react'
import BlogIndex from '../blog/pages/IndexPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogForm from '../blog/pages/BlogForm';
import BlogPostFull from '../blog/pages/BlogPostFull';

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
            subtitle: props.subtitle
        }

        console.log('app reloaded')
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
                        <Route exact path='/' component={BlogIndex} />
                        <Route path='/post/add' component={BlogForm} />
                        <Route path='/post/edit' component={BlogForm} />

                        <Route path='/post/:id' component={
                            ({ match, history }) => (
                                <BlogPostFull
                                    id={parseInt(match.params.id)}
                                    history={history}
                                />
                            )
                        } />

                        <Route component={() => (<div>404 - Not Found</div>)} />
                    </Switch>
                </div>
            </Router>
        )
    }
}