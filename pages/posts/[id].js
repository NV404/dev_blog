import React from 'react'
import Link from 'next/link'
import Container from '@material-ui/core/Container';
import Head from 'next/head';


//This post variable store received data from getServerSideProps function
const PostPage = ({ post }) => (
  <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <Link href="/"><button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: "#3291ff", margin: '10px', fontSize: '15px' }}>← Back To Home</button></Link>
    <Container>
      <center>
        <h1>{post.title}</h1>
        <img src={post.cover_image} style={{ borderRadius: '20px', maxWidth: '95vw' }} />
      </center>
      <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
    </Container>
    <style jsx global>{`
        .ltag-github-readme-tag{
          padding: 10px;
          border: solid 2px black;
          border-radius: 10px;
        }
        .ltag-github-readme-tag img{
          width: 30px;
        }
        .readme-overview h2{
          text-align: center;
        }
        .article-body-image-wrapper{
          display: flex;
          justify-content: center;
          width:100%;
        }
        .article-body-image-wrapper img{
          max-width: 95vw;
        }
      `}</style>
  </>
)

//this getServerSideProps function fetch articles from our dev.to profile and return received data to PostPage
export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`https://dev.to/api/articles/${id}`)
  const json = await res.json()
  return { props: { post: json } }
}

export default PostPage