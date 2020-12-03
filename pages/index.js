import { getPosts, getProfile } from './api/posts/index'
import Container from '@material-ui/core/Container';
import Post from '../components/Post/index'
import Head from 'next/head';

const IndexPage = ({ posts, profile }) => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Container maxWidth="md">
      <div style={{ backgroundColor: "#5e32b6", width: "100%", height: "20vh", marginTop: "100px", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column", borderRadius: '5px' }}>
        <img src={profile.profile_image} style={{ borderRadius: '50%', width: '120px', marginTop: '-90px' }} />
        <p style={{ color: "white" }}>{profile.summary}</p>
      </div>
    </Container>
    <Container>
      {posts.map(p => (
        <Post key={p.title} post={p} />
      ))}
    </Container>
  </>
)


IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const res1 = await getProfile()
  const json = await res.json()
  const json1 = await res1.json()
  return { posts: json, profile: json1 }
}

export default IndexPage