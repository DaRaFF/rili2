# Scope

Rili2 is a tool to support a release manager with useful information.
At the moment it's under heavy construction.


# Example

### Get the latest tag of a branch

```bash
// add a json config file to ~/.config/configstore/rili2.json
{
  "versions": [
    { "header": "UPSTREAM master" },
    { "owner": "livingdocsIO", "repo": "livingdocs-server", "branch": "master"},
    { "owner": "livingdocsIO", "repo": "livingdocs-editor", "branch": "master"},
    { "header": "UPSTREAM release-2019-12" },
    { "owner": "livingdocsIO", "repo": "livingdocs-server", "branch": "release-2019-12"},
    { "owner": "livingdocsIO", "repo": "livingdocs-editor", "branch": "release-2019-12"}
  ]
}

// get the latest tag of a branch from the config
npx github:daraff/rili2 --token=<your-github-token>
node cli-get-version-from-config.js --token=<your-github-token>
```
