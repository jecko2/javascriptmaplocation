// DOM QUERYING
import { API_GOOGLE_KEY, mapLocation, map, positionSuccess } from "./main.js";

// mapboxgl.accessToken = "pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ";




class Handle  {
    
    addshowmapbtn() {
        const btnDiv = document.createElement("nav");
        const btn = document.createElement("button");
        const addText = mapLocation.appendChild(btnDiv).appendChild(btn);
        btn.classList.add("show-map");
        addText.textContent = "Show map"
        const showMap = document.querySelector(".show-map");
        
        const getClickBtn = () => {
            // let map;
            showMap.addEventListener("click", () => {
                setTimeout(() => {
                   
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((callbackSuccess, positionError) => {
                        // console.log(positionSuccess);
                        
                    
                        const initMap = () => {
                            map = new google.maps.Map((document.querySelector("#map")), {
                                zoom: 15,
                                center: {
                                    lat: positionSuccess(callbackSuccess).lat,
                                    lng: positionSuccess(callbackSuccess).lng
                                }
                               
                            });
                            // const marker = new google.maps.Marker({
                            //     position: center,
                            //     map: map,
                            // });
                        };
                        initMap();
                    });
                    };

                }
                    , 1000)
            });

            
        }
        return getClickBtn();
    }
}




const handleBtn = new Handle();
handleBtn.addshowmapbtn();

