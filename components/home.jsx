import {StyleSheet,Text,View,ScrollView,Image} from 'react-native';
import Home_inner from "./home_inner.jsx";
export default function Home(props) {

  let dn = props.data.list[0].weather[0].icon.slice(2,3);
  if(dn==="d"){dn=true}
  else{dn=false}

  //dn=false;

  var t = new Date(props.data.city.sunrise * 1000);
  var rise = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);

  t = new Date(props.data.city.sunset * 1000);
  var set = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);

  let pic;
  if(props.data.list[0].weather[0].icon==="01d"){pic = require("../assets/image/dayclear.png");}
  else if(props.data.list[0].weather[0].icon==="01n"){pic = require("../assets/image/nightclear.png");}
  else if(props.data.list[0].weather[0].icon==="02d" || props.data.list[0].weather[0].icon==="03d"){pic = require("../assets/image/dayclouds.png");}
  else if(props.data.list[0].weather[0].icon==="02n" || props.data.list[0].weather[0].icon==="03n"){pic = require("../assets/image/nightclouds.png");}
  else if(props.data.list[0].weather[0].icon==="09d" || props.data.list[0].weather[0].icon==="10d"){pic = require("../assets/image/dayrain.png");}
  else if(props.data.list[0].weather[0].icon==="09n" || props.data.list[0].weather[0].icon==="10n"){pic = require("../assets/image/nightrain.png");}
  else if(props.data.list[0].weather[0].icon==="11d"){pic = require("../assets/image/daythunder.png");}
  else if(props.data.list[0].weather[0].icon==="11n"){pic = require("../assets/image/nightthunder.png");}
  else if(props.data.list[0].weather[0].icon==="13d" || props.data.list[0].weather[0].icon==="13n"){pic = require("../assets/image/snow.png");}
  else if(props.data.list[0].weather[0].icon==="50d"){pic = require("../assets/image/daymist.png");}
  else{pic = require("../assets/image/nightmist.png");}
  
  return (
    <ScrollView style={[styles.home,dn?{backgroundColor:"#FBFAF5"}:{backgroundColor:"#191922"}]}>
      <Text style={[styles.home_cityname,dn?{color:"black"}:{color:"white"}]}>{props.data.city.name}</Text>
      <Text style={[styles.home_date,dn?{color:"black"}:{color:"white"}]}>{props.data.list[0].dt_txt.slice(0,10)}</Text>
        <Image style={styles.weatherimg} source={pic}/>
        <Text style={[styles.home_currenttemp,dn?{color:"black"}:{color:"white"}]}>{props.data.list[0].main.temp}°C</Text>
        <Text style={[styles.home_currentstatus,dn?{color:"black"}:{color:"white"}]}>{props.data.list[0].weather[0].main}</Text>
      <Text style={[styles.home_resttemp,dn?{color:"black"}:{color:"white"}]}>{props.data.list[0].main.temp_min}° / {props.data.list[0].main.temp_max}°</Text>
      <Text style={[styles.home_Humadity,dn?{color:"black"}:{color:"white"}]}>Humadity : {props.data.list[0].main.humidity}%</Text>
      <Text style={[styles.home_Pressure,dn?{color:"black"}:{color:"white"}]}>Pressure : {props.data.list[0].main.pressure} hPa</Text>
      <View style={styles.home_leftright}>
        <Text style={[styles.home_sunriseset,dn?{color:"black"}:{color:"white"}]}>Sunrise : {rise} AM</Text>
        <Text style={[styles.home_sunriseset,dn?{color:"black"}:{color:"white"}]}>Sunset : {set} PM</Text>
      </View>
      <ScrollView horizontal={true} style={styles.home_innerdiv}>
        {Array.from({length:8},(x,i)=>{
          return <Home_inner time={props.data.list[i].dt_txt} key={i} state={props.data.list[i].weather[0].icon} dn={dn} temp={props.data.list[i].main.temp}/>
        })}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home:{
    flex: 10,
    padding:10,
  },
  home_cityname:{
    textAlign:"center",
    fontSize:22,
    fontWeight:"400",
    marginTop:10,
  },
  home_date:{
    textAlign:"center",
    fontSize:17,
    fontWeight:"300",
    opacity:0.75,
    marginBottom:15,
  },
  home_leftright:{
    flexDirection:"row",
  },
  weatherimg:{
    width:"40%",
    marginHorizontal:"30%",
    height:150,
    marginTop:30,
    marginBottom:10,
    resizeMode:"contain",
  },
  home_currenttemp:{
    textAlign:"center",
    fontSize:37,
    textAlignVertical:"center",
    fontWeight:"400",
    marginBottom:30,
  },
  home_currentstatus:{
    textAlign:"center",
    fontSize:22,
    fontWeight:"500",
    marginBottom:20,
  },
  home_resttemp:{
    textAlign:"center",
    fontSize:20,
    opacity:0.80,
  },
  home_Humadity:{
    textAlign:"center",
    fontSize:17,
    fontWeight:"300",
    marginTop:25,
  },
  home_Pressure:{
    textAlign:"center",
    fontSize:17,
    fontWeight:"300",
    marginBottom:25,
  },
  home_sunriseset:{
    width:"50%",
    textAlign:"center",
  },
  home_innerdiv:{
    marginVertical:35,
  }
});
