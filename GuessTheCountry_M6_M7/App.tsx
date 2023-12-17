import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import GuessTheCountryScreen from "./src/screens/GuessTheCountryScreen";
import WinScreen from "./src/screens/WinScreen";
import MainNavigator from "./src/navigator/MainNavigator";
import 'react-native-gesture-handler';

const App: React.FC = ()=>{
  return(
    <SafeAreaProvider>
      <MainNavigator/>
    </SafeAreaProvider>
  )
}

export default App;