import React from 'react'
import Link from 'next/link'
import { Card, Page } from '@geist-ui/react'

const PostItem = ({ post }) => (
  <Link href={{ pathname: '/posts/[id]', query: { id: post.id }, }}>
    <Card hoverable style={{ margin: '25px 0px', cursor: "pointer" }}>
      <h3>{post.title}</h3>
      <p>Date: {post.published_timestamp.slice(0, -10)} &nbsp;&nbsp;&nbsp;&nbsp; Author: {post.user['name']}</p>
      <p>{post.description}</p>
    </Card>
  </Link>
)

export default PostItem