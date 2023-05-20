import React from 'react';
import { Audio } from 'expo-av';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function LettersScreen({ navigation }) {
    const [sound, setSound] = React.useState();

    async function playA() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/a.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playB() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/b.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playC() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/c.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playD() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/d.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playE() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/e.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playF() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/f.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playG() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/g.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playH() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/h.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playI() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/i.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playJ() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/j.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playK() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/k.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playL() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/l.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playM() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/m.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playN() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/n.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playO() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/o.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playP() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/p.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playQ() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/q.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playR() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/r.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playS() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/s.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playT() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/t.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playU() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/u.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playV() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/v.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playW() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/w.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playX() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/x.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playY() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/y.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    async function playZ() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/alphabetsound/zyy.mp3')
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
                <Image source={require('../assets/titles/wonderletters.png')} style={styles.title}></Image>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.box} onPress={playA}>
                    <Image source={require('../assets/alphabet/ant.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playB}>
                    <Image source={require('../assets/alphabet/bear.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playC}>
                    <Image source={require('../assets/alphabet/cow.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playD}>
                    <Image source={require('../assets/alphabet/dog.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playE}>
                    <Image source={require('../assets/alphabet/elephant.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playF}>
                    <Image source={require('../assets/alphabet/frog.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playG}>
                    <Image source={require('../assets/alphabet/giraffe.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playH}>
                    <Image source={require('../assets/alphabet/horse.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playI}>
                    <Image source={require('../assets/alphabet/ibis.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playJ}>
                    <Image source={require('../assets/alphabet/jellyfish.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playK}>
                    <Image source={require('../assets/alphabet/kangaroo.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playL}>
                    <Image source={require('../assets/alphabet/leopard.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playM}>
                    <Image source={require('../assets/alphabet/makaw.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playN}>
                    <Image source={require('../assets/alphabet/nightingale.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playO}>
                    <Image source={require('../assets/alphabet/ostrich.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playP}>
                    <Image source={require('../assets/alphabet/peacock.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playQ}>
                    <Image source={require('../assets/alphabet/quial.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playR}>
                    <Image source={require('../assets/alphabet/rabbit.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playS}>
                    <Image source={require('../assets/alphabet/snail.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playT}>
                    <Image source={require('../assets/alphabet/tortoise.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playU}>
                    <Image source={require('../assets/alphabet/unicorn.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playV}>
                    <Image source={require('../assets/alphabet/vulture.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playW}>
                    <Image source={require('../assets/alphabet/woodpecker.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playX}>
                    <Image source={require('../assets/alphabet/xray.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playY}>
                    <Image source={require('../assets/alphabet/yak.png')} style={styles.imagesize}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={playZ}>
                    <Image source={require('../assets/alphabet/zebra.png')} style={styles.imagesize}></Image>
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
        resizeMode: 'cover',
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
        width: 400,

    },
    imagesize: {
        height: 300,
        width: 400,
        resizeMode: 'stretch'
    }
});