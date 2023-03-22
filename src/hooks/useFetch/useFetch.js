import { useState, useEffect } from 'react'
import axios from 'axios'

export default (url) => {

    const [data, setData] = useState([])
    const [dataLoading, setDataLoading] = useState(true)
    const [dataError, setDataError] = useState(false)

    const fetchData = async () => {
        try {
            const { data: jobsList } = await axios.get(url)
            setData(jobsList)
            setDataLoading(false)
        } catch (error) {
            setDataError(true)
            setDataLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data, dataLoading, dataError }
}