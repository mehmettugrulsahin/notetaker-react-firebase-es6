import axios from 'axios';

const getRepos = (username) => {
    return axios.get('https://api.github.com/users/' + username + '/repos');
};

const getUserInfo = (username) => {
    return axios.get('https:api.github.com/users/' + username);
};

const helpers = {
    getGitHubInfo: (username) => {
        return axios.all([getRepos(username), getUserInfo(username)]).then((arr) => {
            return {
                repos: arr[0].data,
                bio: arr[1].data
            }
        });
    }
};

export default helpers;