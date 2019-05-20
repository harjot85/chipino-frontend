import axios from "axios";

//Temporary API for testing
export function getAllTextContent() {
    return axios.get(
        "https://staging-api-chipinomeshworks.herokuapp.com/api/content",
        {
            method: "GET"
        }
    );
}