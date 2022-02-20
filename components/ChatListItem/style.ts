import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent: "space-between",
        padding : 10,
    },
    leftContainer : {
        flexDirection : 'row',
    },
    midContainer : {
        justifyContent : "space-around"
    },
    username : {
        color : '#fff',
        fontWeight : 'bold',
        fontSize : 16
    },
    lastmessage : {
        fontSize : 16,
        color: 'gray',
        flex : 1
    },
    time : {
        fontSize : 16,
        color: 'gray'
    },
    avatar : {
        width : 60,
        height: 60,
        marginRight : 15,
        borderRadius : 50
    }
});

export default styles