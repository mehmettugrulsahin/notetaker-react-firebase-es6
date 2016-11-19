import React from 'react';

const Notes = React.createClass({
    render() {
        return (
            <div>
                <p>NOTES!</p>
                <p>NOTES: {this.props.notes}</p>
            </div>
        )
    }
});

export default Notes;