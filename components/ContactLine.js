import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking, Platform, View, SafeAreaView } from 'react-native';
import Colors from '../styles/Colors';
function ContactLine({index, label, name, number}) {
  let nthChild = index % 2 == 0 ? styles.oddChild : styles.evenChild;
    const dialCall = () => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = `tel:${number}`;
        }
        else {
            phoneNumber = `telprompt:${number}`;
        }

        Linking.openURL(phoneNumber);
    };
    return (
        <View style={[styles.line, nthChild]}>
          <View>
            <Text style={styles.Label}>{label}:</Text>
          </View>
          <View>
            <TouchableOpacity onPress={dialCall} activeOpacity={0.7} style={styles.button} >
              <Text style={styles.TextStyle}>{name}</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}
const styles = StyleSheet.create({

    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      height: 33,
      width: 120,
      padding: 6,
      backgroundColor: '#4130E6',
      borderRadius: 7,
    },
  
    TextStyle: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    },
    line: {
      marginHorizontal: 16,
      height: 36,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    oddChild: {
      backgroundColor: Colors.ashWhite,
    },  
    evenChild: {
      backgroundColor: Colors.grey94,
    },
    Label: {
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

export default ContactLine;