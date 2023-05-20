import * as React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from './Components/SplashScreen';
import HomeScreen from './Components/HomeScreen';
import NumbersScreen from './Components/NumbersScreen';
import QuizzesScreen from './Components/QuizzesScreen';
import LettersScreen from './Components/LettersScreen';
import ShapesScreen from './Components/ShapesScreen';
import CreditScreen from './Components/CreditScreen';
import AboutScreen from './Components/AboutScreen';

//Quiz Screens
import ShapeQuiz from './Components/Quizzes/Shapes/ShapeQuiz';
import ShapeQuiz1 from './Components/Quizzes/Shapes/ShapeQuiz1';
import ShapeQuiz2 from './Components/Quizzes/Shapes/ShapeQuiz2';
import ShapeQuiz3 from './Components/Quizzes/Shapes/ShapeQuiz3';
import NumberQuiz from './Components/Quizzes/Numbers/NumberQuiz';
import NumberQuiz1 from './Components/Quizzes/Numbers/NumberQuiz1';
import NumberQuiz2 from './Components/Quizzes/Numbers/NumberQuiz2';
import NumberQuiz3 from './Components/Quizzes/Numbers/NumberQuiz3';
import LetterQuiz from './Components/Quizzes/Letters/LetterQuiz';
import LetterQuiz1 from './Components/Quizzes/Letters/LetterQuiz1';
import LetterQuiz2 from './Components/Quizzes/Letters/LetterQuiz2';
import LetterQuiz3 from './Components/Quizzes/Letters/LetterQuiz3';
import QuizCongrats from './Components/Quizzes/QuizCongrats';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
          />

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />

          <Stack.Screen
            name="NumbersScreen"
            component={NumbersScreen}
          />

          <Stack.Screen
            name="QuizzesScreen"
            component={QuizzesScreen}
          />

          <Stack.Screen
            name="LettersScreen"
            component={LettersScreen}
          />

          <Stack.Screen
            name="ShapesScreen"
            component={ShapesScreen}
          />

          <Stack.Screen
            name="AboutScreen"
            component={AboutScreen}
          />

          <Stack.Screen
            name="CreditScreen"
            component={CreditScreen}
          />

          {/*Quiz Screens*/}
          <Stack.Screen
            name="ShapeQuiz"
            component={ShapeQuiz}
          />

          <Stack.Screen
            name="ShapeQuiz1"
            component={ShapeQuiz1}
          />

          <Stack.Screen
            name="ShapeQuiz2"
            component={ShapeQuiz2}
          />

          <Stack.Screen
            name="ShapeQuiz3"
            component={ShapeQuiz3}
          />

          <Stack.Screen
            name="NumberQuiz"
            component={NumberQuiz}
          />

          <Stack.Screen
            name="NumberQuiz1"
            component={NumberQuiz1}
          />

          <Stack.Screen
            name="NumberQuiz2"
            component={NumberQuiz2}
          />

          <Stack.Screen
            name="NumberQuiz3"
            component={NumberQuiz3}
          />

          <Stack.Screen
            name="LetterQuiz"
            component={LetterQuiz}
          />

          <Stack.Screen
            name="LetterQuiz1"
            component={LetterQuiz1}
          />

          <Stack.Screen
            name="LetterQuiz2"
            component={LetterQuiz2}
          />

          <Stack.Screen
            name="LetterQuiz3"
            component={LetterQuiz3}
          />

          <Stack.Screen
            name="QuizCongrats"
            component={QuizCongrats}
          />

        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});