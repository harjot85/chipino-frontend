import axios from "axios";

export function getSocialMediaIcons(){
    return axios.get(
        "https://staging-api-chipinomeshworks.herokuapp.com/api/footer",
        { 
            method: "GET"
        }
    )
}