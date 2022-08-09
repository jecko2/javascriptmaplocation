// SELECT ELEMENTS


const addBtn = document.querySelector("#addbtn");

// get the map location on the html

const mapLocation = document.querySelector(".locationmap");
const map = document.querySelector("#map");

// function that will get called

const API_GOOGLE_KEY = "AIzaSyDN3pBuUn3k5a4q-LtbDEF1vYMwh_cfVZQ";

export { API_GOOGLE_KEY, mapLocation, map };



export const positionSuccess = (callback) => {
    
    const lat = callback.coords.latitude;
    const lng = callback.coords.longitude;

    // Create element holder
    const innerHold = document.createElement("div");
    const h3 = document.createElement("h3");

    // append to the parent holder

    const wrapper = mapLocation.appendChild(innerHold).appendChild(h3);

    // output the location
    wrapper.style.marginTop = "20px";
    wrapper.style.fontSize = "17px";
        // wrapper.style.marginTop = "20px";
        // wrapper.style.marginTop = "20px";

    wrapper.innerHTML += `
        Latitude: ${lat} <br />
        longitute: ${lng}
        `    
    return { lat, lng };
    
}


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((callbackSuccess, positionError) => {
        // console.log(positionSuccess);
        return positionSuccess(callbackSuccess);
        
    });
}
else
{
    positionError = () => {
            return new Error((error) => {
                console.log(error);
            });
        }
}


