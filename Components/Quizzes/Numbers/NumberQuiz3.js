import { Text, StyleSheet, Image, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import NumberQuizPage from '../../../assets/NumberQuiz3.png';
import backButton from '../../../assets/backButton.png';
import Option0 from './Option0.png';
import Option1 from './Option1.png';
import Option2 from './Option2.png';
import Option3 from './Option3.png';
import Option6 from './Option6.png';
import Option7 from './Option7.png';
import Option8 from './Option8.png';
import Option9 from './Option9.png';

export default function NumberQuiz1({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.backgroundContainer}>
                    <Image source={NumberQuizPage} resizeMode='cover' style={styles.backdrop} />
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
                                onPress={() => navigation.navigate("QuizCongrats")}
                            >
                                <Image style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 20,
                                }} source={Option3} />
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
                                }} source={Option2} />
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
                                }} source={Option1} />
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