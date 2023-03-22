import React from 'react'
import { Pressable, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Button.styles'

export default ({title, iconName, handlePress, isAdded, onlyIcon}) => {
    return(
        <Pressable onPress={handlePress} style={styles.container} >
            <Icon name={iconName} style={[styles.icon,{color:isAdded}]} />
            { !onlyIcon && <Text style={styles.title} >{title}</Text> }
        </Pressable>
    )
}