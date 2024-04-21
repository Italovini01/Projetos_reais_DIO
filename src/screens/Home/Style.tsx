import { StyleSheet} from "react-native";



const styles = StyleSheet.create({

    
    appcontainer: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        },
        logoContainer:{
            flexDirection: 'column',
            borderColor:'#fff',
            borderWidth:2,
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom:30,
            paddingTop:20,
            paddingBottom:10,
            backgroundColor: '#4D4D4D',
            // position:'absolute'
            
            
        },
        inputContainer: {
            width:'80%',
            flexDirection:'column',
            alignItems: 'center',
            // marginBottom:20,
            // justifyContent:'center',
            // position:'absolute'
        }
});

export default styles