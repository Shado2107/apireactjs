import React, {Component} from "react";

class Comments extends Component {

    onDelete = () => {
        // console.log("comments on delete");
        this.props.onDelete(this.props.comment.id);
    }

    render() {

        const { id, title, content } = this.props.comment
        
        return (
        <tr>
            <td tyle={{ textAlign: "center" }}> {id} </td>
            <td> {title} </td>
            <td> {content} </td>
            <td>
                <button className="mini ui blue button">Edit</button>
                <button className="mini ui red button" onClick={this.onDelete} >Delete</button>
            </td>
        </tr>
        );
    }
}

export default Comments;

