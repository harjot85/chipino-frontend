import axios from "axios";

export function getNavbarItems() {
  return axios.get(
    // "https://staging-api-chipinomeshworks.herokuapp.com/api/navbar",
    "https://localhost:44302/api/navbar",
    {
      method: "GET"
    }
  );
}
