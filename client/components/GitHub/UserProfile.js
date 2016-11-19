import React from 'react';

const UserProfile = React.createClass({
    render() {
        return (
            <div>
                <p>USER PROFILE!</p>
                <p>Username: {this.props.username}</p>
                <p>Bio: {this.props.bio}</p>
            </div>
        )
    }
});

export default UserProfile;