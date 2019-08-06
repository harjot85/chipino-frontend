import axios from "axios";
import { GetEnvironment } from "../../utilities/functions";

export function getSocialMediaIcons() {
  let envData = GetEnvironment();
  return axios.get(
    `${envData.baseUrl}/api/footer`,
    {
      method: "GET"
    }
  );
}
