import axios from "axios";
import { GetEnvironment } from"../../utilities/functions";

export function getImages() {
  let envData = GetEnvironment();
  console.log(`${envData.baseUrl}/api/media`);
  return axios.get(
    `${envData.baseUrl}/api/media`,
    {
      method: "GET"
    }
  );
}
