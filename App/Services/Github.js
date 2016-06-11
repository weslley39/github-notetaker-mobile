let BASE_URL = 'https://api.github.com/users/';
let api = {
  getBio(username){
    username = username.toLowerCase().trim();
    let url = BASE_URL + username;
    return fetch(url).then((res) => res.json());
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    let url = `${BASE_URL}${username}/repos`;
    return fetch(url).then((res) => res.json());
  }
}

module.exports = api;
