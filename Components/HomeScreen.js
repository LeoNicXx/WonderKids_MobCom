import { StyleSheet, Image, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

//image buttons
import numbers from '../assets/numbers.png';
import quizzes from '../assets/quizzes.png';
import letters from '../assets/letters.png';
import shapes from '../assets/shapes.png';
import about from '../assets/about.png';
import credit from '../assets/credit.png';


export default function HomeScreen({navigation}) {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("NumbersScreen")}
                            style={{
                                paddingBottom: 240
                            }}
                        >
                            <Image
                                source={numbers}
                                style={styles.inner}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate("QuizzesScreen")}
                        >
                            <Image
                                source={quizzes}
                                style={styles.inner}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("LettersScreen")}
                        >
                            <Image
                                source={letters}
                                style={styles.inner}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ShapesScreen")}
                        >
                            <Image
                                source={shapes}
                                style={styles.inner}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("AboutScreen")}
                        >
                            <Image
                                source={about}
                                style={styles.inner}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("CreditScreen")}
                        >
                            <Image
                                source={credit}
                                style={styles.inner}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#FDEAB5'
    },
    box: {
        width: '50%',
        height: '23%',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 100,
        paddingBottom: 25,
        marginTop: 10,
        marginBottom: 10,
    },
    inner: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',

        width: Dimensions.get('window').width - 340,
        height: 250,
        borderRadius: 15,
    }
});