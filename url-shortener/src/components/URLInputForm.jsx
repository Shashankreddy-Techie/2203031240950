import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

const URLInputForm = ({ onSubmit }) => {
  // Keep URLs info here, start with one empty row
  const [urls, setUrls] = useState([
    { longUrl: '', validity: '', shortcode: '' },
  ])

  // When user changes any input, update the value in state
  const handleChange = (index, field, value) => {
    const newUrls = [...urls] // copy current list
    newUrls[index][field] = value // change what user typed
    setUrls(newUrls) // update state
  }

  // Add a new empty URL row, max 5 rows allowed
  const addRow = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }])
    }
  }

  return (
    <Box>
      {/* Show inputs for each URL */}
      {urls.map((url, i) => (
        <Box key={i} display="flex" gap={2} mb={2}>
          {/* Input for original URL */}
          <TextField
            label="Long URL"
            fullWidth
            value={url.longUrl}
            onChange={(e) => handleChange(i, 'longUrl', e.target.value)}
          />
          {/* How many minutes this short URL will work */}
          <TextField
            label="Validity (minutes)"
            type="number"
            value={url.validity}
            onChange={(e) => handleChange(i, 'validity', e.target.value)}
          />
          {/* Optional: custom short code */}
          <TextField
            label="Shortcode (optional)"
            value={url.shortcode}
            onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
          />
        </Box>
      ))}

      {/* Button to add another URL input */}
      <Button variant="outlined" onClick={addRow} disabled={urls.length >= 5}>
        Add URL
      </Button>

      {/* Send all URLs to be shortened */}
      <Button
        variant="contained"
        sx={{ ml: 2 }}
        onClick={() => onSubmit(urls)}
      >
        Shorten
      </Button>
    </Box>
  )
}

export default URLInputForm
