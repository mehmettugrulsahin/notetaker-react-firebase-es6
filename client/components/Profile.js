import React from 'react';
import Router from 'react-router';

import UserProfile from './GitHub/UserProfile';
import Repos from './GitHub/Repos';
import Notes from './Notes/Notes';

const Profile = React.createClass({
    getInitialState() {
        return {
            notes: [1, 2, 3],
            bio: 'Mehmet Tuğrul Şahin',
            repos: ['a', 'b', 'c']
        }
    },
    render() {
        console.log(this.props)

        return (
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <UserProfile 
                    username={this.props.params.username}
                    bio={this.state.bio}
                    />
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <Repos repos={this.state.repos}/>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <Notes notes={this.state.notes}/>
                </div>
            </div>            
        )
    }
});

export default Profile;