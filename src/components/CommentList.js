import React, {Component} from "react";
import Comment from "./Comments";

class CommentList extends Component {

    onDelete = id => {
        // console.log("comment list", id);
        this.props.onDelete(id);
    }

    onEdit = data => {
        // console.log("comment list", id);
        this.props.onEdit(data);
    }

render(){

    const comments = this.props.comments;
    return(
        <div className="data">
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th style={{ width: "50px", textAlign: "center" }}>#</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th tyle={{ width: "148px" }}>Action</th>
                    </tr>
                </thead>

                <tbody>

                  {
                      comments.map( comment =>{
                        return(
                            <Comment comment={comment} key={comment.id} 
                            onDelete={this.onDelete}
                            onEdit={this.onEdit} />
                        )
                      })
                  } 
                </tbody>
            </table>

        </div>
    );
}
}

export default CommentList;