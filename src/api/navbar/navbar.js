import axios from "axios";

export function getNavbarItems() {
  return axios.get(
    "https://staging-api-chipinomeshworks.herokuapp.com/api/navbar",
    {
      method: "GET"
    }
  );
}
