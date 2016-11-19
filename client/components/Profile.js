import React from 'react';
import Router from 'react-router';

import UserProfile from './GitHub/UserProfile';
import Repos from './GitHub/Repos';
import Notes from './Notes/Notes';

import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

const Profile = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState() {
        return {
            notes: [1, 2, 3],
            bio: 'Mehmet Tuğrul Şahin',
            repos: ['a', 'b', 'c']
        }
    },
    componentDidMount() {
        this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
        const childRef = this.ref.child(this.props.params.username);
        this.bindAsArray(childRef, 'notes');
    },
    componentWillUnmmount(){
        this.unbind('notes');
    },
    render() {
        return (
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <UserProfile 
                    username={this.props.params.username}
                    bio={this.state.bio}
                    />
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <Repos 
                    username={this.props.params.username}
                    repos={this.state.repos}/>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <Notes 
                    username={this.props.params.username}
                    notes={this.state.notes}/>
                </div>
            </div>            
        )
    }
});

export default Profile;