import { getAccessToken } from "../../../utils";
import { fetchWithToken } from "../_base";
import BASE_URL from "../../baseUrl";

export async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();
  return responseJson;
}

export async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  return responseJson;
}

export async function getUserLogged(token) {
  const response = await fetchWithToken(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token ?? getAccessToken()}`,
    },
  });
  const responseJson = await response.json();

  return responseJson;
}
