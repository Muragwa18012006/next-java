"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const Dashboard = () => {

  const session = useSession()
  
  const router = useRouter()
  if(session.status === "loading") {
    return <p>Loading...</p>
  }
  if(session.status === "unauthenticated"){
    router?.push("/dashboard/login")
  }
  if(session.status === "authenticated"){
  return (

    <div>Dashboard</div>
  )}
}

export default Dashboard