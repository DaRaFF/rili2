const axios = require('axios')


// @return
// {
//   "branchName": "release-2018-11",
//   "sha": "ac6b118a3ed5d6762e86054b10e99c5c6c8112c7",
//   "message": "my commit message",
// }
// OR false
module.exports = async ({owner, repo, token}) => {
  const res = await axios({
    url: `https://api.github.com/repos/${owner}/${repo}/git/refs/tags`,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${token}`,
      'User-Agent': 'rili'
    }
  })
  return res.data
}
