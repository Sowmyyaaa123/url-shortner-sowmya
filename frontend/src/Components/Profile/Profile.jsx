import React from 'react'
import { Avatar, Container } from '@mantine/core'
import profilepic from '../../assets/profile.jpg' // change path if needed


export default function Profile() {

  const dummy = {
    name: "Mente Sowmya Lakshmi",
    email: "mentesowmya7@gmail.com",
    id: "2310040060",
    avatar: "/profile.jpg",
  }

  return (
    <
      Container
      style={{
        height: "50vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <Avatar
          src={dummy.avatar}
          size={140}
          mx="auto"
        />

        <h2 style={{ color: "blue" }}>
          {dummy.name}
        </h2>

        <p>{dummy.email}</p>

        <p>ID: {dummy.id}</p>
      </div>
    </Container>
  )
}