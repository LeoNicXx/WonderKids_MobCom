import { StyleSheet, Image, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import QuizSelectionBG from '../assets/QuizSelection.png';
import backButton from '../assets/backButton.png';
import ShapeQuizButton from '../assets/ShapeQuizButton.png';
import LetterQuizButton from '../assets/LetterQuizButton.png';
import NumberQuizButton from '../assets/NumberQuizButton.png';

export default function QuizzesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.backgroundContainer}>
                    <Image source={QuizSelectionBG} resizeMode='cover' style={styles.backdrop} />
                </View>
                <View style={styles.logo} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SplashScreen")}
                    >
                        <Image source={backButton} />
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LetterQuiz")}
                        style={{
                            marginTop: 20,
                            marginBottom: 40
                        }}
                    >
                        <Image
                            source={LetterQuizButton}
                            style={{
                                width: 470,
                                height: 250,
                                borderRadius: 30
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("NumberQuiz")}
                        style={{
                            marginBottom: 40
                        }}
                    >
                        <Image
                            source={NumberQuizButton}
                            style={{
                                width: 470,
                                height: 250,
                                borderRadius: 30
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("ShapeQuiz")}
                        style={{
                            marginBottom: 40
                        }}
                    >
                        <Image
                            source={ShapeQuizButton}
                            style={{
                                width: 470,
                                height: 250,
                                borderRadius: 30
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
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
        backgroundColor: '#F8D86A'
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 50,
        height: 40,
        marginTop: 50,
        marginLeft: 40,

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
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: '20%',
    }
});