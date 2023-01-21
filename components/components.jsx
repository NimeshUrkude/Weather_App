import {StyleSheet,Text} from 'react-native';
export default function heading(props) {
  return (
    <>
      <Text>{props.txt}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  heading:{
  },
});
