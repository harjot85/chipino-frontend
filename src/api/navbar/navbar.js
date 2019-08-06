import axios from "axios";
import { GetEnvironment } from "../../utilities/functions";

export function getNavbarItems() {
  let envData = GetEnvironment();
  return axios.get(
    `${envData.baseUrl}/api/navbar`,
    {
      method: "GET"
    }
  );
}
