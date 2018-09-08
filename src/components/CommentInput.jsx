import React from 'react';


class CommentInput extends React.Component {
    constructor() {
        super();
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            content: ''
        }
    }
    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    };
    handleCommentChange(e) {
        this.setState({
            content: e.target.value
        })
    };
    handleSubmit() {
        if(this.props.onSubmit) {
            const {username, content} = this.state;
            this.props.onSubmit({
                username,
                content
            });
        }
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className='comment-field-name'>用户名：</span>
                    <div className="comment-field-input">
                        <input name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                    </div>
                </div>
                <div className="comment-field">
                    <span className='comment-field-name'>评论内容：</span>
                    <div className="comment-field-input">
                        <textarea name="comment" value={this.state.content} onChange={this.handleCommentChange} />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        );
    }
}

export default CommentInput;
