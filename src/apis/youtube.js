import axios from 'axios';

//YouTube API website https://console.developers.google.com
const KEY = 'AIzaSyAs_2KQcie9qzi6tG38-ZAmQ935MgDVuFc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});