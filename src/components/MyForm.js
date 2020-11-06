import React, {Component} from "react";

class MyForm extends Component {

    state= {
        form: {title: '', content: '', isEdit: false },
        btnName: "Save",
        btnClass: "ui primary button submit-button",
    }

    isEmpty(obj){
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && !this.isEmpty(this.props.comment)) {
            // console.log("update");
            this.setState({
                form: { ...this.props.comment, isEdit: true},
                btnName: "Update",
                btnClass: "ui orange button submit-button"
            });
        }
    }

    render() {
        return (
            <form className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="title" value={this.state.form.title} />
                    </div>

                    <div className="four wide field">
                        <label>Content</label>
                        <input type="text" name="content" placeholder="content" />
                    </div>

                    <div className="four wide field">
                        <button className={this.state.btnClass}> {this.state.btnName} </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default MyForm;