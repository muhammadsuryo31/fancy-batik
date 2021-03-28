import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setData } from '../store/actions'
export default function useFetch(url) {
  const [batik, setBatik] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const dispatch = useDispatch()
  
  useEffect (() => {
    setLoading(true)
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      } else {
        return response.json()
      }
    })
    .then((result) => {
      dispatch(setData(result.hasil))
      setBatik(result.hasil)
    })
    .catch((error) => {
      console.log('gagal');
      setErr(error)
    })
    .finally((_) => {
      setLoading(false)
    })
  }, [url])
    
    return [batik, loading, err]
  
} 