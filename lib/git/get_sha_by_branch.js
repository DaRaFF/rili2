const axios = require('axios')

// @return
// {
//   "branchName": "release-2018-11",
//   "sha": "ac6b118a3ed5d6762e86054b10e99c5c6c8112c7",
//   "message": "my commit message",
// }
// OR false
module.exports = async ({owner, repo, token, branch}) => {
  try {
    const res = await axios({
      url: `https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${branch}`,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${token}`,
        'User-Agent': 'rili'
      }
    })
    const commit = res.data
    return commit.object && commit.object.sha
    ? commit.object.sha
    : false
  } catch (error) {
    return false
  }
}
