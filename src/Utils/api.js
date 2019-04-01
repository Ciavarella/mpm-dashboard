import React from 'react'

const api = async (path, ...args) => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080'
      : 'https://mpm-node-backend.herokuapp.com'
  return await fetch(baseUrl + path, ...args)
}

export default api
