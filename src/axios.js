import axios from "axios";


const instance = axios.create({
    basket: 'http://localhost:5001/e-commerce-4fb85/us-central1/api' // THE API {clous function} url
})

export default instance;