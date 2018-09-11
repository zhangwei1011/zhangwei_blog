import React from 'react';
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

class CommentApp extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
    }
    handleSubmitComment(comment) {
        // console.log(comment);
        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        })
    };
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment} />
                <CommentList comments={this.state.comments} />
            </div>
        );
    }
}

export default CommentApp;
