import React, { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import URLInputForm from '../components/URLInputForm'
import ShortURLCard from '../components/ShortURLCard'

const generateShortcode = () =>
  Math.random().toString(36).substring(2, 8)

const ShortenerPage = () => {
  const [shortened, setShortened] = useState([])

  const handleSubmit = (urls) => {
    const result = urls.map((url) => {
      const code = url.shortcode || generateShortcode()
      const validity = url.validity ? parseInt(url.validity) : 30
      const expiresAt = new Date(
        Date.now() + validity * 60 * 1000
      ).toISOString()

      const newShort = {
        longUrl: url.longUrl,
        shortcode: code,
        expiresAt,
        createdAt: new Date().toISOString(),
        clicks: [],
      }

      // Store logs in localStorage (mock logging middleware)
      const logs = JSON.parse(localStorage.getItem('logs')) || []
      logs.push({ action: 'SHORTENED_URL', ...newShort })
      localStorage.setItem('logs', JSON.stringify(logs))

      return newShort
    })

    setShortened(result)
  }

  return (
    <Container>
      <Typography variant="h4" mb={3}>
        URL Shortener
      </Typography>
      <URLInputForm onSubmit={handleSubmit} />
      {shortened.map((s, i) => (
        <ShortURLCard key={i} data={s} />
))}
    </Container>
  )
}

export default ShortenerPage
