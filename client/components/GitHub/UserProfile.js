import React from 'react';

const UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.string.isRequired
    },
    render() {
        const {username, bio} = this.props;

        return (
            <div>
                <p>USER PROFILE!</p>
                <p>Username: {username}</p>
                <p>Bio: {bio}</p>
            </div>
        )
    }
});

export default UserProfile;