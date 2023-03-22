import React from 'react'
import { View, Text } from 'react-native'
import Button from '../Button'
import styles from './Footer.styles'

export default ({page, setPage, goToTop}) => {

    const nextPage = () => {
        if (page !== 99) {
            if(page == 4)
                setPage(page + 2)
            else
                setPage(page + 1)
            goToTop()
        }
    }
    const previousPage = () => {
        if (page !== 0) {
            if(page == 6)
                setPage(page - 2)
            else
                setPage(page - 1)
            goToTop()
        }
    }

    return (
        <View style={styles.footer} >
            <Button
                title={null}
                iconName='arrow-left-thick'
                isAdded={true}
                handlePress={previousPage}
                onlyIcon={true}
            />
            <Text style={styles.pageNumber} >{page + 1}</Text>
            <Button
                title={null}
                iconName='arrow-right-thick'
                isAdded={true}
                handlePress={nextPage}
                onlyIcon={true}
            />
        </View>
    )
}