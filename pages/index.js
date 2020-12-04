import { getPosts, getProfile } from './api/posts/index'
import Container from '@material-ui/core/Container';
import Post from '../components/Post/index'
import Head from 'next/head';

const IndexPage = ({ posts, profile }) => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Container>
      <div style={{ backgroundColor: "#5e32b6", width: "100%", height: "22vh", marginTop: "100px", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column", borderRadius: '5px' }}>
        <img alt="Profile Image" src={profile.profile_image} style={{ borderRadius: '50%', width: '120px', marginTop: '-70px' }} />
        <p style={{ color: "white" }}>{profile.summary}</p>
        <div style={{ padding: '10px', width: '30%', display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
          <a href={"https://github.com/" + profile.github_username + "/"} target="_black" rel="noopener" class="github">

            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href={'http://' + profile.website_url} target="_black" rel="noopener" class="github">

            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>world-globe-outline</title><path d="M256,0Q362.11,0,436.9,75.1,512,149.89,512,256T436.9,436.9Q362.11,512,256,512T75.1,436.9Q0,362.11,0,256T75.1,75.1Q149.89,0,256,0ZM55.34,190.63a211.82,211.82,0,0,0,0,130.73h66a416,416,0,0,1,0-130.73Zm14.9,165.7q34.36,63.55,100.64,92.73a232.64,232.64,0,0,1-20.07-31.92,302.59,302.59,0,0,1-22.2-60.81ZM170.87,63.24Q104.59,92.43,70.54,155.37h58.07a304.36,304.36,0,0,1,22.2-60.51A198.45,198.45,0,0,1,170.87,63.24ZM151.72,190.63A390.59,390.59,0,0,0,145.94,256a390.48,390.48,0,0,0,5.78,65.37H241.1V190.63Zm82.7-143.51q-32.83,13.38-57.16,61.11-9.43,19.16-17.63,47.13H241.1V45.61a3.4,3.4,0,0,1-1.52.3h-1.82Zm3.34,419h1.82a5.12,5.12,0,0,0,1.52.3V356.33H159.62q8.21,28.28,17.63,47.43,24.32,47.74,57.16,61.11ZM274.24,45.91h-1.83a3.38,3.38,0,0,1-1.52-.3V155.37h81.48q-8.21-28-17.63-47.13-24.33-47.73-57.16-61.11Zm86,275.46A391.23,391.23,0,0,0,366.06,256a395,395,0,0,0-5.78-65.37H270.9V321.37Zm-82.7,143.51q32.84-13.39,57.16-61.11,9.73-19.16,17.63-47.43H270.9V466.39a5.1,5.1,0,0,0,1.52-.3h1.83ZM441.46,155.37q-34.06-62.94-100-92.12A212.61,212.61,0,0,1,361.2,94.86a295.22,295.22,0,0,1,22.2,60.51Zm-100,293.7q66-29.49,100-92.73H383.39q-8.52,33.74-22.2,60.81A226,226,0,0,1,341.43,449.06Zm49.25-258.43A412,412,0,0,1,395.86,256a415.71,415.71,0,0,1-5.17,65.37h66a211.89,211.89,0,0,0,0-130.73Z" /></svg>
          </a>
        </div>

      </div>
    </Container>
    <Container>
      {/* This section maps all articles from our profile */}
      {posts.map(p => (
        <Post key={p.title} post={p} />
      ))}
    </Container>
    <style jsx global>{`
        .github svg{
          fill: white;
          width: 1.5rem;
          height: 1.5rem;
        }
      `}</style>
  </>
)

//this function fetch articles and Profile data from our dev.to profile and return received data to IndexPage
IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const res1 = await getProfile()
  const json = await res.json()
  const json1 = await res1.json()
  return { posts: json, profile: json1 }
}

export default IndexPage