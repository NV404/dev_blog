import React from 'react'
import Link from 'next/link'
import { Card, Page } from '@geist-ui/react'

const PostItem = ({ post }) => (
  <Link href='/posts/[id]' as={'/posts/' + post.id}>
    <Card hoverable style={{ margin: '25px 0px', cursor: "pointer" }}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </Card>
  </Link>
)

export default PostItem