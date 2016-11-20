import React from 'react';

const UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render() {
        console.log(this.props.bio);

        const {username, bio} = this.props;
        
        return (
            <div>
                <p>USER PROFILE!</p>
                <p>Username: {username}</p>
            </div>
        )
    }
});

export default UserProfile;