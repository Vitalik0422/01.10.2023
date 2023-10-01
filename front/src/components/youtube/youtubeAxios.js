import axios from "axios";
const API_KEY ='AIzaSyCHo9gmEPEb9VLrXvfFUa31Nhkq84f_mRI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 6,
        key: API_KEY     
    }
})