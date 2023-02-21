const getReservations = async() => {
  url = 'http://localhost:3001/api/v1/reservations'
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  catch {
    console.log(error)
    return error
  }
}

export { getReservations }