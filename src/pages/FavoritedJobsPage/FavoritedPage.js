import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import JobCard from '../../components/JobCard'
import styles from './FavoritedPage.styles'

export default ({navigation}) => {

    const favoriteJobs = useSelector(state => state.favorites.favoriteList)

    const handlePressedJob = item => navigation.navigate('DetailPage', { item })
    const renderJobCard = ({item}) => <JobCard job={item} handlePress={() => handlePressedJob(item)} />
    const emptyComponent = () => {
        return(
            <View>
                <Text style={styles.emptyText} >You don't have a favorite job.</Text>
            </View>
        )
    }
    return(
        <FlatList 
            style={styles.container}
            data={favoriteJobs}
            renderItem={renderJobCard}
            ListEmptyComponent={emptyComponent}
        />
    )
}