import {StyleSheet,Text,View,Image} from 'react-native';
export default function Loading() {

  return (
    <View style={styles.loading_div}>
      <Text style={styles.loading_txt}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading_div:{
    flex:1,
    backgroundColor:"black",
    justifyContent:"center"
  },
  loading_txt:{
    color:"white",
    fontSize:40,
    textAlign:"center"
  }
});
