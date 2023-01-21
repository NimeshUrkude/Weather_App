import {StyleSheet,Text,View,Image} from 'react-native';
export default function Home_down(props) {

  let pic;
  if(props.state==="01d"){pic = require("../assets/image/dayclear.png");}
  else if(props.state==="01n"){pic = require("../assets/image/nightclear.png");}
  else if(props.staten==="02d" || props.state==="03d"){pic = require("../assets/image/dayclouds.png");}
  else if(props.state==="02n" || props.state==="03n"){pic = require("../assets/image/nightclouds.png");}
  else if(props.state==="09d" || props.state==="10d"){pic = require("../assets/image/dayrain.png");}
  else if(props.state==="09n" || props.state==="10n"){pic = require("../assets/image/nightrain.png");}
  else if(props.state==="11d"){pic = require("../assets/image/daythunder.png");}
  else if(props.state==="11n"){pic = require("../assets/image/nightthunder.png");}
  else if(props.state==="13d" || props.state==="13n"){pic = require("../assets/image/snow.png");}
  else if(props.state==="50d"){pic = require("../assets/image/daymist.png");}
  else{pic = require("../assets/image/nightmist.png");}

  return (
    <View style={styles.home_inner}>
      <Text style={[styles.home_inner_time,props.dn?{color:"black"}:{color:"white"}]}>{props.time.slice(10,16)}</Text>
      <Image style={styles.home_inner_img} source={pic}/>
      <Text style={[styles.home_inner_temp,props.dn?{color:"black"}:{color:"white"}]}>{props.temp}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home_inner:{
    flex:1,
  },
  home_inner_time:{
    textAlign:"center",
    fontSize:16,
    fontWeight:"300",
  },
  home_inner_img:{
    width:55,
    height:55,
    margin:10,
  },
  home_inner_temp:{
    textAlign:"center",
    fontSize:16,
    fontWeight:"400",
  }
});
