import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';


interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({title, onPress, position= 'br'}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
            activeOpacity={ 0.8 }
            // style={
            //         (position === 'bl')
            //             ? styles.fabLocationBL
            //             : styles.fabLocationBR
            //     }
            style={[
                styles.fabLocation,
                (position === 'bl')
                    ? styles.left
                    : styles.right
                ]}
                onPress={ onPress}
            >
            <View style={styles.fab}>
                <Text style={styles.fabText}> {title} </Text>
            </View>
        </TouchableOpacity>
        )
    }

    const android = () => {
        return(
            <view >
            <TouchableNativeFeedback
            // style={
            //         (position === 'bl')
            //             ? styles.fabLocationBL
            //             : styles.fabLocationBR
            //     }
            style={[
                styles.fabLocation,
                (position === 'bl')
                    ? styles.left
                    : styles.right
                ]}
                onPress={ onPress}
                background={TouchableNativeFeedback.Ripple('#284258', false, 30)}
            >
            <View style={styles.fab}>
                <Text style={styles.fabText}> {title} </Text>
            </View>
        </TouchableNativeFeedback>
     </view>
        )
    }

  return Platform.OS === 'ios' ? ios() : android();
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right:{
        right: 25
    },
    left:{
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})