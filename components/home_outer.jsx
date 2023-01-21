import { useEffect, useState } from "react";
import {Alert,BackHandler} from 'react-native';
import * as Location from 'expo-location';
import Home from "./home.jsx";
import Loading from "./loading.jsx";
import axios from "axios";

import {API_FETCH} from "@env";

export default function home_outer() {
  const [data,setdata]=useState(null)
  useEffect(()=>{
    async function check(){
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status!=="granted"){
        Alert.alert(
          "Location Permision Denied",
          "App Need Restart to Work",
          [{text: "Exit",onPress:()=>BackHandler.exitApp(),style:"destructive"}] 
        )
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      async function fetchapi(){
        const url = API_FETCH + location.coords.latitude + "&lon=" + location.coords.longitude;
        await axios.get(url).then(function(res){
          setdata(res.data);
        })
      }
      fetchapi()
    }
    check();
  },[])


  if(data===null){return<Loading/>}
  return (<Home data={data}/>);
}
