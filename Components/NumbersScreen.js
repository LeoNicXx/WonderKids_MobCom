import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

export default function NumbersScreen({ navigation, route }) {
    const [sound, setSound] = React.useState();
    async function play1() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Numberssound/1.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function play2() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Numberssound/2.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }
    async function play3() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Numberssound/3.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }
    async function play4() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Numberssound/4.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }
    async function play5() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Numberssound/5.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }
    async function play6() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Numberssound/6.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }
    async function play7() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Numberssound/7.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }
    async function play8() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Numberssound/8.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function play9() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/Numberssound/9.mp3')
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
                <Image source={require('../assets/titles/wondernumbers.png')} style={styles.title}></Image>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.box} onPress={play1}>
                    <Image source={require('../assets/numbers/1.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={play2}>
                    <Image source={require('../assets/numbers/2.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={play3}>
                    <Image source={require('../assets/numbers/3.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={play4}>
                    <Image source={require('../assets/numbers/4.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={play5}>
                    <Image source={require('../assets/numbers/5.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={play6}>
                    <Image source={require('../assets/numbers/6.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={play7}>
                    <Image source={require('../assets/numbers/7.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={play8}>
                    <Image source={require('../assets/numbers/8.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={play9}>
                    <Image source={require('../assets/numbers/9.png')} style={styles.imagesize}></Image>
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
        height: 300,
        width: 300,

    },
    imagesize: {
        height: 300,
        width: 300,
        resizeMode: 'stretch'
    }
});