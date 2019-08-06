import axios from "axios";
import { GetEnvironment } from"../../utilities/functions";

export function getCarousel() {
  let envData = GetEnvironment();
  return axios.get(
    `${envData.baseUrl}/api/carousel`,
    {
      method: "GET"
    }
  );
}
