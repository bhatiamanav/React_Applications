import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID OK0g7eKwQzpfluveFGpb2q5VuELYhnAAhW-cGzxqpRA' 
    }
});