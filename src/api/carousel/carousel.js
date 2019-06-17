import axios from "axios";

export function getCarousel() {
  return axios.get(
    "https://staging-api-chipinomeshworks.herokuapp.com/api/carousel",
    {
      method: "GET"
    }
  );
}
