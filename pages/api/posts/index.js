const username = "namanvyas"

export function getPosts() {
  return fetch(`https://dev.to/api/articles?username=${username}`)
}

export function getPost(slug) {
  return fetch(`https://dev.to/api/articles/${slug}`)
}

export function getProfile() {
  return fetch(`https://dev.to/api/users/by_username?url=${username}`)
}