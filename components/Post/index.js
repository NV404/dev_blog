import React from 'react'
import Link from 'next/link'
import Container from '@material-ui/core/Container';

const PostItem = ({ post }) => (

  <Container maxWidth="md" style={{ border: "2px solid black", borderRadius: "5px", margin: '15px auto' }}>
    <Link href={{ pathname: '/posts/[id]', query: { id: post.id }, }}><button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}><h1>{post.title}</h1></button></Link>
    <p>Date: {post.published_timestamp.slice(0, -10)} &nbsp;&nbsp;&nbsp;&nbsp; Author: {post.user['name']}</p>
    <p>{post.description}</p>
  </Container>
)

export default PostItem