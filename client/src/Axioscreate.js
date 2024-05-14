import axios from "axios";

const sampleurl="http://localhost:5000"

var TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:LoginpageAshifbatch")).userInfo)
.personelData[0]&&JSON.parse(JSON.parse(localStorage.getItem("persist:LoginpageAshifbatch")).userInfo)
.personelData[0].accessToken


console.log("Token in axiocreate",TOKEN);

export const Publicrequest=axios.create({
    baseURL:sampleurl
})

export const Tokenrequest=axios.create({
    baseURL:sampleurl,
    headers:{token:TOKEN}
})