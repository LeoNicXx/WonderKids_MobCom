import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, Image, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LogoImage from '../assets/splashScreenImage.png';
import LogoText from '../assets/splashScreenText.png';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './HomeScreen';
import NumbersScreen from './NumbersScreen';
const Stack = createNativeStackNavigator();

const BGColor = "#F8D86A"

export default function SplashScreen() {

    // SafeArea Value...
    const edges = useSafeAreaInsets();

    const startAnimation = useRef(new Animated.Value(0)).current;

    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveLogoText = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    useEffect(() => {
        setTimeout(() => {
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        toValue: -Dimensions.get('window').height + (edges.top + 65),
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        toValue: 0.15,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleTitle,
                    {
                        toValue: 0.4,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                        toValue: {
                            x: (Dimensions.get('window').width / 2) + 1450,
                            y: (Dimensions.get('window').height / 2) + 2400
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogoText,
                    {
                        toValue: {
                            x: 0,
                            y: (Dimensions.get('window').height / 2) + 170
                        },
                        useNativeDriver: true
                    }
                )
            ])
                .start();
        }, 3000);
    }, []);

    return (
        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <Animated.View style={{
                flex: 1,
                backgroundColor: BGColor,
                zIndex: 1,
                transform: [
                    { translateY: startAnimation }
                ]
            }}>

                <Animated.View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'

                }}>
                    <Animated.Image source={LogoText} style={{
                        width: 360,
                        height: 100,
                        transform: [
                            { translateY: moveLogoText.y },
                            { scale: scaleTitle },
                        ]
                    }}>
                    </Animated.Image>

                    <Animated.Image source={LogoImage} style={{
                        transform: [
                            { scale: scaleLogo },
                            { translateX: moveLogo.x },
                            { translateY: moveLogo.y },
                        ]
                    }}>
                    </Animated.Image>
                </Animated.View>
            </Animated.View>

            <Animated.View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#FDEAB5',
                zIndex: 0,
            }}>

                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                    />
                </Stack.Navigator>

            </Animated.View>
        </View>
    );
}