import React from 'react';
import {browserHistory} from 'react-router';

class SearchGitHub extends React.Component {
    getRef(ref) {
        this.usernameRef = ref;
    };

    handleSubmit() {
        const username = this.usernameRef.value;
        this.usernameRef = '';
        browserHistory.push(`/profile/${username}`);
    };

    render() {
        return (
          <div className="col-sm-12">
            <form onSubmit={() => this.handleSubmit()}>
              <div className="form-group col-sm-7">
                <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
              </div>
              <div className="form-group col-sm-5">
                <button type="submit" className="btn btn-block btn-primary">Search Github</button>
              </div>
            </form>
          </div>
        )
    };
};

export default SearchGitHub;
