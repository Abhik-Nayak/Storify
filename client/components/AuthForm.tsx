import React from 'react'

type Props = "sign-in" | "sign-up";

const AuthForm = ({type} : {type: Props}) => {
  return (
    <div>{type}</div>
  )
}

export default AuthForm