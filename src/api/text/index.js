import axios from "axios";

//Temporary API for testing
export function getSocialMediaContent() {
    return axios.get(
        "https://localhost:5001/",
        {
            method: "GET"
        }
    );
}