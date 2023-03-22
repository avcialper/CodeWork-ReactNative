import React from 'react'
import Lottie from 'lottie-react-native'

export default () => {
    return <Lottie source={require('../../assets/jobLoading.json')} autoPlay style={{backgroundColor: 'black'}} />
}