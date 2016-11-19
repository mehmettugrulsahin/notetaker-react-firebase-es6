import React from 'react';

const Repos = React.createClass({
    render() {
        return (
            <div>
                <p>REPOS!</p>
                <p>REPOS: {this.props.repos}</p>
            </div>
        )
    }
});

export default Repos;