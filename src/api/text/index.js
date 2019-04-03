import axios from "axios";

//Temporary API for testing
export function getSocialMediaContent() {
    return axios.get(
        "https://reqres.in/api/users",
        {
            method: "GET"
        }
    );
}