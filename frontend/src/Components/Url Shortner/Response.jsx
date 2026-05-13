import React from 'react'

import { Paper, Text, Button } from '@mantine/core'
import QRCode from "react-qr-code";

export default function Response({ response }) {

  const shortUrl =
    "https://url-shortener-bootcamp.onrender.com/api/s/" +
    response.shortCode

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      withBorder
      style={{
        width: '500px',
        margin: '40px auto',
        textAlign: 'center',
      }}
    >
      <Text size="xl" fw={700} mb="lg">
        Shortened URL
      </Text>

      <a
        href={shortUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          color: 'blue',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        {shortUrl}
      </a>

      <div style={{ marginTop: '30px' }}>
         <QRCode
          value={shortUrl}
          size={200}
        />
      </div>

      <Button
        fullWidth
        mt="lg"
        onClick={() => navigator.clipboard.writeText(shortUrl)}
      >
        Copy URL
      </Button>
    </Paper>
  )
}