import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'

const StatsPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const logs = JSON.parse(localStorage.getItem('logs')) || []
    const urls = logs.filter((log) => log.action === 'SHORTENED_URL')
    setData(urls)
  }, [])

  return (
    <Container>
      <Typography variant="h4" mb={2}>
        URL Statistics
      </Typography>
      {data.map((d, i) => (
        <URLStatsCard key={i} data={d} />
      ))}
    </Container>
  )
}

export default StatsPage
