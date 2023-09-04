"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"
const AuthProviser = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
  }

export default AuthProviser