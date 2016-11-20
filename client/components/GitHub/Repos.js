import React from 'react';

const Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired,
    },
    render() {
        console.log(this.props.repos);
        return (
            <div>
                <p>REPOS!</p>
            </div>
        )
    }
});

export default Repos;