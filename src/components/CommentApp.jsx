import React from 'react';
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

class CommentApp extends React.Component {
    constructor() {
        super();
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
    }
    handleSubmitComment(comment) {
        console.log(comment);
    };
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment} />
                <CommentList />
            </div>
        );
    }
}

export default CommentApp;
