import { Text, StyleSheet, Image, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import ShapeQuizPage from '../../../assets/ShapesQuiz1.png';
import backButton from '../../../assets/backButton.png';
import Circle from './Circle.png';
import Heart from './Heart.png';
import Hexagon from './Hexagon.png';
import Star from './Star.png';
import Trapezoid from './Trapezoid.png';
import Triangle from './Triangle.png';

export default function NumberQuiz1({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.backgroundContainer}>
                    <Image source={ShapeQuizPage} resizeMode='cover' style={styles.backdrop} />
                </View>

                <View style={styles.logo} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ShapeQuiz2")}
                    >
                        <Image source={backButton} />
                    </TouchableOpacity>
                </View>

                <View style={styles.logo1} >
                    <View style={{ flexDirection: "column" }}>
                        <View style={styles.logo2}>
                            <TouchableOpacity
                                onPress={() => alert("Ohhh No! That's not the correct answer. Try Again!")}
                            >
                                <Image style={{
                                    width: 400,
                                    height: 80,
                                    borderRadius: 20,
                                }} source={Hexagon} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.logo2}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("ShapeQuiz2")}
                            >
                                <Image style={{
                                    width: 400,
                                    height: 80,
                                    borderRadius: 20,
                                }} source={Triangle} />
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
        marginTop: '110%',
        marginLeft: '14%',
        marginBottom: 250
    },

    logo2: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginLeft: '40%',
        marginBottom: 40
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