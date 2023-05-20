import { Text, StyleSheet, Image, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import LetterQuizPage from '../../assets/QuizCongrats.png';
import enterButton from '../../assets/doneButton.png';

export default function LetterQuiz({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.backgroundContainer}>
                    <Image source={LetterQuizPage} resizeMode='cover' style={styles.backdrop} />
                </View>

                <View style={styles.logo1} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("QuizzesScreen")}
                    >
                        <Image style={{
                            width: 450,
                            height: 100,
                            borderRadius: 40,
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
        marginTop: '140%',
        marginLeft: '13%',
        marginBottom: 180
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