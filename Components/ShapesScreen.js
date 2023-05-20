import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

export default function ShapesScreen({ navigation, route }) {
    const [sound, setSound] = React.useState();

    async function playCircle() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Shapessound/Circle.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playHeart() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Shapessound/Heart.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playHexagon() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Shapessound/Hexagon.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playSquare() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Shapessound/Square.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playStar() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Shapessound/Star.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playTrapezoid() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Shapessound/Trapezoid.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playTriangle() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Shapessound/Triangle.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (



        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate("SplashScreen")}>
                    <Image source={require('../assets/backarrow.png')} style={styles.arrowsize}></Image>
                </TouchableOpacity>
                <Image source={require('../assets/titles/wondershapes.png')} style={styles.title}></Image>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.box} onPress={playCircle}>
                    <Image source={require('../assets/shapes/circle.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playHeart}>
                    <Image source={require('../assets/shapes/heart.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playHexagon}>
                    <Image source={require('../assets/shapes/hexagon.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playSquare}>
                    <Image source={require('../assets/shapes/square.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playStar}>
                    <Image source={require('../assets/shapes/star.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playTrapezoid}>
                    <Image source={require('../assets/shapes/trapezoid.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playTriangle}>
                    <Image source={require('../assets/shapes/triangle.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>


            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginTop: 20,
        height: 65,
        width: 200,
        resizeMode: 'stretch',
        marginBottom: 10,
        marginRight: 35
    },
    arrow: {
        height: 25,
        width: 25,
        marginTop: 10,
        right: 35
    },
    arrowsize: {
        height: 25,
        width: 25
    },
    container: {
        flex: 1,
        backgroundColor: '#F8D86A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        alignItems: 'center',
        height: 400,
        width: 300,

    },
    imagesize: {
        height: 400,
        width: 300,
        resizeMode: 'stretch'
    }
});