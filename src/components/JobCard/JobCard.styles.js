import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#161b22',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    company: {
        fontStyle: 'italic'
    },
    locationContainer: {
        width: 150,
        backgroundColor: '#ef5350',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        alignItems: 'center'
    },
    location: {
        color: 'white',
        fontWeight: 'bold'
    },
    level: {
        textAlign: 'right',
        fontSize: 15,
        color: '#ef5350'
    }
})