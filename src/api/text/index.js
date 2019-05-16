import axios from "axios";

//Temporary API for testing
export function getAllTextContent() {
    return axios.get(
        "https://localhost:44302/api/content",
        {
            method: "GET"
        }
    );
}