import React from 'react';
import NotesList from './NotesList';

const Notes = React.createClass({
    render() {
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>
                <NotesList notes={this.props.notes} />
            </div>
        )
    }
});

export default Notes;