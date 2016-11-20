import React from 'react';
import Router from 'react-router';

import UserProfile from './GitHub/UserProfile';
import Repos from './GitHub/Repos';
import Notes from './Notes/Notes';

import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

import helpers from '../helpers';

const Profile = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState() {
        return {
            notes: [],
            bio: {},
            repos: ['a', 'b', 'c']
        }
    },
    componentDidMount() {
        this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
        this.init(this.props.params.username);
    },
    componentWillReceiveProps(nextProps) {
        this.unbind('notes');
        this.init(nextProps.params.username);
    },
    init(username) {
        const childRef = this.ref.child(username);
        this.bindAsArray(childRef, 'notes');

        helpers.getGitHubInfo(username).then((data) => {
            this.setState({
                bio: data.bio,
                repos: data.repos
            });            
        });
    },
    componentWillUnmmount(){
        this.unbind('notes');
    },
    handleAddNote(newNote) {
        this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
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
                    notes={this.state.notes}
                    addNote={this.handleAddNote}/>
                </div>
            </div>            
        )
    }
});

export default Profile;