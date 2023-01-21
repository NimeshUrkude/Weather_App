import { useEffect, useState } from "react";
import {View,Text,StyleSheet} from 'react-native';
import * as Location from 'expo-location';
import Home from "./home.jsx";
import axios from "axios";
export default function home_outer() {
  const [data,setdata]=useState(null)
  useEffect(()=>{
    async function check(){
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status!=="granted"){
        console.log("Permission to access location was denied")
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      async function fetchapi(){
        const url = "https://api.openweathermap.org/data/2.5/forecast?appid=0384a725724202bc810f79ebb3dfaaa6&units=metric&lat=" + location.coords.latitude + "&lon=" + location.coords.longitude;
        await axios.get(url).then(function(res){
          setdata(res.data);
          console.log(url);
        })
      }
      fetchapi()
    }
    check();
  },[])


  if(data===null){return<View><Text>Loading</Text></View>}
  return (<Home data={data}/>);
}
