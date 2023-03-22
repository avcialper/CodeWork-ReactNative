import React, { useState, useRef } from 'react'
import { FlatList } from 'react-native'
import JobCard from '../../components/JobCard'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import useFetch from '../../hooks/useFetch/useFetch'
import { API_URL } from '@env'
import styles from './JobsPage.styles'
import Footer from '../../components/Footer'

export default ({ navigation }) => {

    const [page, setPage] = useState(0)
    const flatListRef = useRef(null)

    const { data, dataLoading, dataError } = useFetch(`${API_URL}=${page}`)

    if (dataLoading) return <Loading />
    if (dataError) return <Error />

    const handlePressedJob = item => navigation.navigate('DetailPage', { item })

    const renderJobCards = ({ item }) => <JobCard job={item} handlePress={() => handlePressedJob(item)} />

    const goToTop = () => flatListRef.current.scrollToIndex({ index: 0 })

    return (
        <FlatList
            ref={flatListRef}
            style={styles.container}
            data={data.results}
            renderItem={renderJobCards}
            ListFooterComponent={<Footer page={page} setPage={setPage} goToTop={goToTop} />}
        />
    )
}