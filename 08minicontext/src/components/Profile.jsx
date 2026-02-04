import React, { useContext } from 'react'
import UserContext from '../context/Usercontex'

function Profile() {
  const {user} = useContext(UserContext)
  if (!user) return <div> please login </div>
  return <div>wlecome {user.username}</div>
}

export default Profile