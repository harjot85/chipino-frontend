import axios from "axios";

export function getImages() {
  return axios.get(
    "https://staging-api-chipinomeshworks.herokuapp.com/api/media",
    {
      method: "GET"
    }
  );
}
