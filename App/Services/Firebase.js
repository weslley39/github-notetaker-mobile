let BASE_URL = 'https://github-notetaker-a83ed.firebaseio.com/';
let api = {
  getNotes(username){
    username = username.toLowerCase().trim();
    let url  = `${BASE_URL}${username}.json`
    return fetch(url).then((res) => res.json());
  }
  addNote(username, note){
    username = username.toLowerCase().trim();
    let url  = `${BASE_URL}${username}.json`
    return fetch(url, {
      method: 'POST',
      body  : JSON.stringify(note)
    }).then((res) => res.json());
  }
}

module.exports = api;
