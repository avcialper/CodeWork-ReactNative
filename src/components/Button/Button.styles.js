import { StyleSheet,Dimensions } from 'react-native'
export default StyleSheet.create({
    container:{
        width: Dimensions.get('screen').width / 2.5 - 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ef5350',
        marginBottom: 40,
        padding: 10,
        borderRadius: 5
    },
    icon: {
        fontSize: 20,
        color: 'white',
        marginHorizontal: 3
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 3
    }
})