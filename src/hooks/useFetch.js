import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../constants/env"

const useFetch = (enpoint, headers = {}) => {

  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${API_URL}/${enpoint}`)
    .then((resp) => {
      setData(resp.data.data)
    })
    .catch((err) =>{
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  },[])

  return { data, error, loading }
}

export default useFetch