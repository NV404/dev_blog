import React from 'react'
import Link from 'next/link'
import { Page } from '@geist-ui/react'

const PostPage = ({ post }) => (
  <Page>
    <Page.Header>
      <Link href="/"><p style={{ margin: '20px', cursor: "pointer", color: "#3291ff" }}>← Back To Home</p></Link>
      <h2>{post.title}</h2>
    </Page.Header>
    <Page.Content>
      <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
    </Page.Content>
  </Page>
)

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`https://dev.to/api/articles/${id}`)
  const json = await res.json()
  return { props: { post: json } }
}

export default PostPage