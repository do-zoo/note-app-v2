import { fetchWithToken } from "../_base";
import BASE_URL from "../../baseUrl";

export async function getActiveNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes`);
  const responseJson = await response.json();

  return responseJson;
}

export async function getArchivedNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
  const responseJson = await response.json();
  return responseJson;
}
