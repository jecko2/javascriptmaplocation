import { API_GOOGLE_KEY } from "./main.js";

setTimeout(() => { 

    const showMap = document.createElement("script");
    const mainScript = document.createElement("script");
    const googleApiScript = document.createElement("script");


    mainScript.src = "main.js";
    showMap.src = "map.js";
    googleApiScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_GOOGLE_KEY}&callback=initMap&v=weekly`;

    mainScript.type = "module"
    showMap.type = "module"
    

    showMap.defer = true;
    mainScript.defer = true;
    googleApiScript.defer = true;

    
    document.head.append(mainScript);
    document.head.append(showMap);
    document.head.append(googleApiScript);
  
},
    1000)