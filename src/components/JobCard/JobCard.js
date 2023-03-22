import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './JobCard.styles'

export default ({ job, handlePress }) => {
    return (
        <Pressable style={styles.container} onPress={handlePress} >
            <Text style={styles.title} >{job.name}</Text>
            <Text style={styles.company}>{job.company.name}</Text>
            <View style={styles.locationContainer}>
                <Text style={styles.location}>{job.locations[0].name}</Text>
            </View>
            <Text style={styles.level}>{job.levels[0].name}</Text>
        </Pressable>
    )
}