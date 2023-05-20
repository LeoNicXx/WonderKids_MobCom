import { Text, StyleSheet, Image, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import LetterQuizPage from '../../../assets/LettersQuiz.png';
import backButton from '../../../assets/backButton.png';
import enterButton from '../../../assets/enterButton.png';

export default function LetterQuiz({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.backgroundContainer}>
                    <Image source={LetterQuizPage} resizeMode='cover' style={styles.backdrop} />
                </View>
                <View style={styles.logo} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("QuizzesScreen")}
                    >
                        <Image source={backButton} />
                    </TouchableOpacity>
                </View>
                <View style={styles.logo1} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LetterQuiz1")}
                    >
                        <Image style={{
                            width: 350,
                            height: 60,
                            borderRadius: 15,
                        }} source={enterButton} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

var styles = StyleSheet.create({
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    container: {
        flex: 1,
    },

    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 60,
        height: 50,
        marginTop: 50,
        marginLeft: 70,
    },

    logo1: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 60,
        height: 50,
        marginTop: '145%',
        marginLeft: '23.5%',
        marginBottom: 50
    },

    backdrop: {
        flex: 1,
        flexDirection: 'column'
    },

    headline: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'
    }
});