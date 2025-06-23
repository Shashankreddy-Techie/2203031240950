import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

const URLInputForm = ({ onSubmit }) => {
  const [urls, setUrls] = useState([
    { longUrl: '', validity: '', shortcode: '' },
  ])

  const handleChange = (index, field, value) => {
    const newUrls = [...urls]
    newUrls[index][field] = value
    setUrls(newUrls)
  }

  const addRow = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }])
    }
  }

  return (
    <Box>
      {urls.map((url, i) => (
        <Box key={i} display="flex" gap={2} mb={2}>
          <TextField
            label="Long URL"
            fullWidth
            value={url.longUrl}
            onChange={(e) => handleChange(i, 'longUrl', e.target.value)}
          />
          <TextField
            label="Validity (minutes)"
            type="number"
            value={url.validity}
            onChange={(e) => handleChange(i, 'validity', e.target.value)}
          />
          <TextField
            label="Shortcode (optional)"
            value={url.shortcode}
            onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
          />
        </Box>
      ))}
      <Button variant="outlined" onClick={addRow} disabled={urls.length >= 5}>
        Add URL
      </Button>
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
