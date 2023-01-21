import {StyleSheet,Text,View,ScrollView,Image} from 'react-native';
import Home_inner from "./home_inner.jsx";
export default function Home(props) {

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
    <ScrollView style={styles.home}>
      <Text style={styles.home_cityname}>{props.data.city.name}</Text>
      <Text style={styles.home_date}>Date</Text>
      <View style={styles.home_leftright}>
        <Image style={styles.weatherimg} source={pic}/>
        <Text style={styles.home_currenttemp}>{props.data.list[0].main.temp}°</Text>
      </View>
        <Text style={styles.home_currentstatus}>{props.data.list[0].weather[0].main}</Text>
      <Text style={styles.home_resttemp}>{props.data.list[0].main.temp_min}° / {props.data.list[0].main.temp_max}°</Text>
      <Text style={styles.home_Humadity}>Humadity : {props.data.list[0].main.humidity}%</Text>
      <Text style={styles.home_Pressure}>Pressure : {props.data.list[0].main.pressure} hPa</Text>
      <View style={styles.home_leftright}>
        <Text style={styles.home_sunriseset}>Sunrise : {props.data.city.sunrise}</Text>
        <Text style={styles.home_sunriseset}>Sunset : {props.data.city.sunset}</Text>
      </View>
      <ScrollView horizontal={true} style={styles.home_innerdiv}>
        {Array.from({length:8},(x,i)=>{
          return <Home_inner time={props.data.list[i].dt_txt} key={i} state={props.data.list[i].weather[0].icon} temp={props.data.list[i].main.temp}/>
        })}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home:{
    flex: 10,
    backgroundColor: "black",
    padding:10,
  },
  home_cityname:{
    textAlign:"center",
    color:"white",
    fontSize:22,
    fontWeight:"400",
    marginTop:20,
  },
  home_date:{
    textAlign:"center",
    color:"white",
    fontSize:17,
    fontWeight:"300",
    opacity:0.75,
    marginBottom:15,
  },
  home_leftright:{
    flexDirection:"row",
  },
  weatherimg:{
    width:"50%",
    height:150,
    marginVertical:20,
    resizeMode:"contain",
    //borderColor:"red",
    //borderWidth:2,
  },
  home_currenttemp:{
    textAlign:"center",
    color:"white",
    fontSize:40,
    textAlignVertical:"center",
    fontWeight:"600",
  },
  home_currentstatus:{
    textAlign:"center",
    color:"white",
    fontSize:22,
    fontWeight:"500",
    marginBottom:20,
  },
  home_resttemp:{
    textAlign:"center",
    color:"white",
    fontSize:20,
    opacity:0.80,
  },
  home_Humadity:{
    textAlign:"center",
    color:"white",
    fontSize:17,
    fontWeight:"300",
    marginTop:20,
  },
  home_Pressure:{
    textAlign:"center",
    color:"white",
    fontSize:17,
    fontWeight:"300",
    marginBottom:20,
  },
  home_sunriseset:{
    width:"50%",
    color:"white",
    textAlign:"center",
  },
  home_innerdiv:{
    marginVertical:35,
  }
});
