import {StyleSheet,View,StatusBar,SafeAreaView} from 'react-native';
import Home_outer from "./components/home_outer.jsx";
export default function App() {

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="light"/>
      <View style={styles.app}>
        <Home_outer/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app:{
    flex:1,
  },
});
