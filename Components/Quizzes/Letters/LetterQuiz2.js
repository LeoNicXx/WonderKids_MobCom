import { Text, StyleSheet, Image, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import LetterQuizPage from '../../../assets/LettersQuiz2.png';
import backButton from '../../../assets/backButton.png';
import OptionA from './OptionA.png';
import OptionB from './OptionB.png';
import OptionC from './OptionC.png';
import OptionE from './OptionE.png';
import OptionG from './OptionG.png';
import OptionR from './OptionR.png';
import OptionT from './OptionT.png';

export default function LetterQuiz2({ navigation }) {
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
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.logo2}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("LetterQuiz3")}
                            >
                                <Image style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 20,
                                }} source={OptionG} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.logo2}>
                            <TouchableOpacity
                                onPress={() => alert("Ohhh No! That's not the correct answer. Try Again!")}
                            >
                                <Image style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 20,
                                }} source={OptionA} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.logo2}>
                            <TouchableOpacity
                                onPress={() => alert("Ohhh No! That's not the correct answer. Try Again!")}
                            >
                                <Image style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 20,
                                }} source={OptionB} />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        width: '100%',
        height: '100%',
    },

    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 60,
        height: 50,
        marginTop: 70,
        marginLeft: 70,
    },

    logo1: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 60,
        height: 50,
        marginTop: '120%',
        marginLeft: '16%',
        marginBottom: 200
    },

    logo2: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginLeft: '40%',
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