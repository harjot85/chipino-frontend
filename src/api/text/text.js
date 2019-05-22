import axios from "axios";

export function getAllTextContent() {
  return axios.get(
    "https://staging-api-chipinomeshworks.herokuapp.com/api/content",
    {
      method: "GET"
    }
  );
}
