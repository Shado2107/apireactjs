import React, {Component} from 'react';
import axios from "axios";
import MyForm from "./MyForm";
// import Loader from "./Loader";
import CommentList from "./CommentList";
import "./app.css";

class App extends Component {

    //1ere methode

// constructor(props){
//     super(props);
//     this.state = {
//         error: null,
//         isloaded: false,
//         comments: []
//     };
// }

// componentDidMount(){
//     fetch("http://localhost:8000/api/comment/").then(res => res.json()).then(
//         (result) => {
//             this.setState({
//                 isloaded: true,
//                 comments: result.data
//             });
//         },

//         (error) => {
//             this.setState({
//                 isloaded: true,
//                 error
//             });
//         }
//     )

// }


//2eme methode

state = {
    comments: [],
    comment: {},
    loader: false,
    url: "http://localhost:8000/api/comment",
}

getComments = async () => {
    this.setState({loader: true});
    const comments = await axios.get(this.state.url);
    this.setState({comments: comments.data, loader: false});
}

deleteComment = async id => {
    this.setState({loader: true});
    await axios.delete(`${this.state.url}/${id}`);

    this.getComments();
}

componentDidMount() {
    // axios.get("http://localhost:8000/api/comment/").then(
    //     res => {
    //         const comments = res.data;
    //         this.setState({
    //             comments
    //         })
    //     }
    // )
    this.getComments();
}

onDelete = id => {
    // console.log("app", id);
    this.deleteComment(id);
}

onEdit = data => {
    // console.log("app", data);
    this.setState({comment: data});
}

render(){

    // const { error, isloaded} = this.state;
    
    // if (error){
    // return <div>Erreur: {error.message} </div>;
    // } else if ( !isloaded ) {
    //     return <Loader/>;
    // } else {
    //     return (
    //         <div>
    //             <div className="ui fixed inverted menu">
    //                 <div className="u container">
    //                     <a href="/#" className="header item">
    //                         React js crud with laravel api
    //                     </a>
    //                 </div>
    //             </div>
    //             <div className="ui main container">
    //                 <MyForm/>

    //                 <CommentList comments={this.state.comments} />
    //             </div>

    //         </div>
    //     );
    // }

    return (
        <div>
            <div className="ui fixed inverted menu">
                <div className="u container">
                    <a href="/#" className="header item">
                        React js crud with laravel api
                    </a>
                </div>
            </div>
            <div className="ui main container">
                <MyForm comment={this.state.comment} />

                <CommentList comments={this.state.comments} 
                onDelete={this.onDelete} 
                onEdit={this.onEdit} />
            </div>

        </div>
    );

        
    }
}

export default App;