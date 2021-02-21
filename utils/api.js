
const axios = require("axios")

// function main
async function api(username) {
  try {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    const { data } = await axios.get(queryUrl);
    const avatarURL = data[0].owner.avatar_url
    // console.log('api.js', avatarURL)
    return avatarURL
  } catch (e) {
    console.log(e)
  }
};

// exporting api back to index.js
module.exports = api