import React/*, { Component }*/ from 'react'
import BlogIndex from '../blog/pages/IndexPage';

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

export default (props) => (
    <div className="container">
        <h1>{props.title}</h1>
        <h2 className="small">{props.subtitle}</h2>
        <hr />
        <BlogIndex />
    </div>
) 