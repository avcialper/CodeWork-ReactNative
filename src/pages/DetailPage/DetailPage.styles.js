import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10
    },
    jobName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 10
    },
    titlesHeader:{
        color: '#ef5350',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 3
    },
    titles: {
        color: 'white'
    },
    detailTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 5
    },
    detailContainer: {
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#161b22',
        color: 'white',
    },
    buttonContainer:{
        flex: 1,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})