import React, { useState } from 'react'

import {
  Button,
  Container,
  Paper,
  Text,
  TextInput,
  Title,
  Stack,
} from '@mantine/core'

import { IconLink } from '@tabler/icons-react'

export default function Input({ setResponse }) {
  const [url, setUrl] = useState('')

  const handleSubmit = () => {

    const dummyResponse = {
      shortCode: 'abc123',
    }

    setResponse(dummyResponse)
  }

  return (
    <Container size={500} mt={60}>
      <Paper
        radius="xl"
        shadow="xl"
        p={40}
        withBorder
        style={{
          background: '#ffffff',
        }}
      >
        <Stack>

          <Title
            order={1}
            ta="center"
            fw={800}
          >
            URL Shortener
          </Title>

          <Text
            ta="center"
            c="dimmed"
            size="md"
          >
            Convert long URLs into short, shareable links instantly.
          </Text>

          <TextInput
            size="lg"
            radius="md"
            placeholder="Paste your long URL here..."
            value={url}
            leftSection={<IconLink size={18} />}
            onChange={(e) => setUrl(e.target.value)}
          />

          <Button
            size="lg"
            radius="md"
            fullWidth
            onClick={handleSubmit}
          >
            Generate Short URL
          </Button>

        </Stack>
      </Paper>
    </Container>
  )
}