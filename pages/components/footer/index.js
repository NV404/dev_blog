import { getProfile } from './../../api/posts/index'

const footer = ({ profile }) => {
  <div style={{ width: '100vw' }}>
    <center>
      Blog Author : {profile.name}
    </center>
  </div>
}

export default footer;