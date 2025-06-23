import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'

const URLStatsCard = ({ data }) => {
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
        <Typography variant="h6" color="primary">
          /{data.shortcode}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Original URL:</strong> {data.longUrl}
        </Typography>
        <Typography variant="body2">
          <strong>Created At:</strong> {data.createdAt}
        </Typography>
        <Typography variant="body2">
          <strong>Expires At:</strong> {data.expiresAt}
        </Typography>
        <Typography variant="body2">
          <strong>Click Count:</strong> {data.clicks?.length || 0}
        </Typography>

        {/* Click Analytics (optional) */}
        {data.clicks && data.clicks.length > 0 && (
          <Box mt={2}>
            <Typography variant="subtitle2">Click Analytics:</Typography>
            {data.clicks.map((click, i) => (
              <Typography variant="caption" key={i}>
                • {click.timestamp} — {click.location} ({click.referrer})
                <br />
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default URLStatsCard
