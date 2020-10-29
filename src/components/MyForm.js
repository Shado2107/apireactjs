import React, {Component} from "react";

class MyForm extends Component {
    render() {
        return (
            <form className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="title" />
                    </div>

                    <div className="four wide field">
                        <label>Content</label>
                        <input type="text" name="content" placeholder="content" />
                    </div>

                    <div className="four wide field">
                        <button className="ui primary button submit-button">save</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default MyForm;