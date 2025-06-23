import React from 'react'
import { Card, CardContent, Typography, Box, Button } from '@mui/material'

// Displays a card with short URL details
const ShortURLCard = ({ data }) => {
  // Redirect handler
  const handleRedirect = () => {
    // Use data.shortUrl if available, else build the URL using the shortcode
    const urlToRedirect = data.shortUrl || `${window.location.origin}/${data.shortcode}`
    window.location.href = urlToRedirect
  }

  return (
    <Card
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderRadius: 2,
        mb: 2,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      }}
    >
      <CardContent>
        {/* Shortcode */}
        {/** Back-end for url shortening and redirecting */}
        <Typography variant="h6" color="primary">
          /{data.shortcode}
        </Typography>
        {/* Original URL */}
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Original URL:</strong> {data.longUrl}
        </Typography>
        {/* Expiry date */}
        <Typography variant="body2">
          <strong>Expires At:</strong> {data.expiresAt}
        </Typography>
        {/* Creation date */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>Created At:</strong> {data.createdAt}
        </Typography>

        {/* Redirect button */}
        <Button variant="contained" color="primary" onClick={handleRedirect}>
          Go to Short URL
        </Button>
      </CardContent>
    </Card>
  )
}

export default ShortURLCard
