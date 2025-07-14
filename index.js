require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
  "login": "ShriyanshRaut",
  "id": 215706933,
  "node_id": "U_kgDODNttNQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/215706933?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ShriyanshRaut",
  "html_url": "https://github.com/ShriyanshRaut",
  "followers_url": "https://api.github.com/users/ShriyanshRaut/followers",
  "following_url": "https://api.github.com/users/ShriyanshRaut/following{/other_user}",
  "gists_url": "https://api.github.com/users/ShriyanshRaut/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ShriyanshRaut/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ShriyanshRaut/subscriptions",
  "organizations_url": "https://api.github.com/users/ShriyanshRaut/orgs",
  "repos_url": "https://api.github.com/users/ShriyanshRaut/repos",
  "events_url": "https://api.github.com/users/ShriyanshRaut/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ShriyanshRaut/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-06-10T15:13:37Z",
  "updated_at": "2025-06-10T15:15:52Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('shriyanshdotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login at backend</h1>');
});

app.get('/youtube', (req,res) => {
    res.send("<h2>Chai Aur Code</h2>");
})

app.get('/github', (req,res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})