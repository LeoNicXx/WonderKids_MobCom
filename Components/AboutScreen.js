import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

import aboutContent from '../assets/aboutScreen.png';
import backButton from '../assets/backButton.png';

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <Image source={aboutContent} resizeMode='cover' style={styles.backdrop} />
            </View>
            <View style={styles.logo} >
                <TouchableOpacity
                    onPress={() => navigation.navigate("SplashScreen")}
                >
                    <Image source={backButton} />
                </TouchableOpacity>
            </View>
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