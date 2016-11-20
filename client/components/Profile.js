import React from 'react';

import UserProfile from './GitHub/UserProfile';
import Repos from './GitHub/Repos';
import Notes from './Notes/Notes';

import getGitHubInfo from '../helpers';

import Rebase from 're-base';

const base = Rebase.createClass('https://github-note-taker.firebaseio.com');

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: []
        };
    };

    componentDidMount() {
        this.init(this.props.params.username);
    };

    componentWillReceiveProps(nextProps) {
        base.removeBinding(this.ref);
        this.init(nextProps.params.username);
    };

    init(username) {
        this.ref = base.bindToState(username, {
            context: this,
            asArray: true,
            state: 'notes'
        });

        getGitHubInfo(username).then((data) => {
            this.setState({
                bio: data.bio,
                repos: data.repos
            });            
        });
    };

    componentWillUnmmount() {
        base.removeBinding(this.ref);
    };

    handleAddNote(newNote) {
        base.post(this.props.params.username, {
            data: this.state.notes.concat([newNote])
        });
    };

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
                    addNote={(newNote) => this.handleAddNote(newNote)}/>
                </div>
            </div>            
        )
    };
};

export default Profile;