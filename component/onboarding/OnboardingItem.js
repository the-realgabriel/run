import React from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions, Button } from 'react-native'

export default OnboardingItems = ({item}) => {
    const {width} = useWindowDimensions
    return (
        <View>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}  />
            <View style={{flex: 0.3, padding: 20}}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={Button.container}>
                      <Button 
                        style={styles.button}
                        title='Signin' 
                        onPress={()=> console.log("botton pressed")}>
                      </Button>
             </View>
        </View>
    )};

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            flex: 0.7,
            justifyContent: 'center',
        },
        title: {
            fontWeight: '800',
            fontSize: 28,
            marginBottom: 10,
            color: '#493d8a',
            textAlign: 'center',
        },
        ButtonContainer:{
            height: 40,
            marginHorizontal: 10,
            backgroundColor: '#000080',
            justifyContent: 'center',
            alignItems: 'center',
          },
          button: {
            height: 400,
            marginHorizontal: 40,
            marginVertical: 20,
            backgroundColor: '#000080',
            justifyContent: 'center',
            alignItems: 'center',
          }
    });