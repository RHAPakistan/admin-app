import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 5,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
        width: 280,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#155F30',
        marginTop: '5%',
        marginLeft: '5%'

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    requestCard: {
        padding: '5%',
        maxWidth: '100%',
        borderBottomColor: '#155F30',
        borderBottomWidth: 1.5,
    },  
    requestHeader:{
        fontWeight: 'bold',
        textAlign: 'center',
    },
    detailsText: {
        marginTop: '2%',
        fontFamily: 'sans-serif-light',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    }
  });
export default styles;  