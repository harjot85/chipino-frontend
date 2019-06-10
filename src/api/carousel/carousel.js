import axios from "axios";

export function getCarousel() {
  return axios.get(
    "https://localhost:44302/api/carousel",
    {
      method: "GET"
    }
  );
}
