import React from 'react'
import { View, Text, ScrollView, Dimensions, Alert, Linking } from 'react-native'
import styles from './DetailPage.styles'
import RenderHTML from 'react-native-render-html'
import Button from '../../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../context/FavoritesJob/favoriteSlice'
import { addSubmit } from '../../context/SubmitsJob/submitSlice'

export default ({ route, navigation }) => {

    const job = route.params.item

    const favoriteJobs = useSelector(state => state.favorites.favoriteList)
    const submitJobs = useSelector(state => state.submits.submitList)
    const dispatch = useDispatch()

    const setFavoriteState = () => {
        if (favoriteJobs.includes(job))
            dispatch(removeFavorite(job.id))
        else
            dispatch(addFavorite(job))
    }

    const setSubmitState = () => {
        if (!submitJobs.includes(job)){
            dispatch(addSubmit(job))
            Alert.alert('CodeWork','Application received.',[
            {
                text: 'Okey',
                onPress: () => navigation.goBack()
            },{
                text: 'Go link',
                onPress: () => Linking.openURL(job.refs.landing_page)
            }
            ])
        } else {
            Alert.alert('CodeWork','The application has already been sent.')
        }
            
    }

    return (
        <ScrollView style={styles.container} >
            <Text style={styles.jobName} >{job.name}</Text>
            <Text style={styles.titlesHeader} >
                Locations:
                <Text style={styles.titles} > {job.locations[0].name}</Text>
            </Text>
            <Text style={styles.titlesHeader} >
                Job Level:
                <Text style={styles.titles} > {job.levels[0].name}</Text>
            </Text>
            <Text style={styles.detailTitle} >DETAIL</Text>
            <RenderHTML
                source={{ html: job.contents }}
                contentWidth={Dimensions.get('window').width}
                baseStyle={styles.detailContainer}
            />
            <View style={styles.buttonContainer} >
                <Button
                    title='Submit'
                    iconName='exit-to-app'
                    handlePress={() => setSubmitState()}
                    isAdded={submitJobs.includes(job) ? 'white' : null}
                    onlyIcon={false}
                />
                <Button
                    title='FavoriteJob'
                    iconName='heart'
                    handlePress={() => setFavoriteState()}
                    isAdded={favoriteJobs.includes(job) ? 'white' : null}
                    onlyIn-con={false}
                />
            </View>
        </ScrollView>
    )
}