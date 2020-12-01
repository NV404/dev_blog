import React from 'react'
import { getPosts, getProfile } from './api/posts/index'
import { Page } from '@geist-ui/react'
import Post from './components/Post/index'

const IndexPage = ({ posts, profile }) => (
  <Page style={{ minHeight: 'auto' }}>
    <Page.Header>
      <div style={{ backgroundColor: "#1a2634", width: "100%", height: "20vh", marginTop: "100px", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column", borderRadius: '5px' }}>
        <img src={profile.profile_image} style={{ borderRadius: '50%', width: '120px', marginTop: '-90px' }} />
        <p>{profile.summary}</p>
      </div>
    </Page.Header>
    <Page.Content>
      {posts.map(p => (
        <Post key={p.title} post={p} />
      ))}
    </Page.Content>
  </Page>
)


IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const res1 = await getProfile()
  const json = await res.json()
  const json1 = await res1.json()
  return { posts: json, profile: json1 }
}

export default IndexPage