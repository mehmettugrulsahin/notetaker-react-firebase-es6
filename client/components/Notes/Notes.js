import React from 'react';
import NotesList from './NotesList';

const Notes = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired
    },
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