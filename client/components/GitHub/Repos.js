import React from 'react';

const Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired,
    },
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