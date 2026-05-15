import { Avatar, Paper, Stack, Text, Title } from "@mantine/core";
import React from "react";

export default function Profile() {
  const dummy = {
    name: "Mente Sowmya Lakshmi",
    email: "2310040060@klh.edu.in",
    id: "2310040060",
    avatar: "https://avatars.githubusercontent.com/u/1234567890?v=4",
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        withBorder
        style={{
          width: "350px",
          textAlign: "center",
        }}
      >
        <Stack align="center">
          <Avatar src={dummy.avatar} size={120} radius="50%" />

          <Title
            order={2}
            style={{
              color: "blue",
            }}
          >
            {dummy.name}
          </Title>

          <Text size="md">{dummy.email}</Text>

          <Text fw={500}>ID: {dummy.id}</Text>
        </Stack>
      </Paper>
    </div>
  );
}