"use client"
import React from 'react'
import Layout from '../components/layout'
import UsersList from "./usersList"
const Users = () => {
  return (
    <>
      <Layout>
        <h2 className='font-bold mb-4' style={{fontSize:'1.3rem',color:'#334155'}}>Users Details</h2>
        <UsersList/>
      </Layout>
    </>
  )
}

export default Users
