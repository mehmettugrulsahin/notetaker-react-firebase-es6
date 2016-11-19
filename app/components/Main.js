import React from 'react';
import ReactDOM from 'react-dom';

const Main = React.createClass({
    render() {
        return (
            <div>
                Hello World
            </div>
        )
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));

export default Main;