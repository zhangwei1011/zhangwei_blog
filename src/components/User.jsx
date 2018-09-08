import React from 'react';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends React.Component {
    render() {
        const {user} = this.props
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr />
            </div>
        )
    }
}

class List extends React.Component {
    render() {
        return (
            <div>
                {
                    users.map((user, i) => <User key={i} user={user} />)
                }
            </div>    
        )
    }
}

export default List