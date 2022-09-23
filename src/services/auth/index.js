import BASE_URL from "../baseUrl";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

async function fetchWithToken(url, options = {}) {
  try {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  } catch (error) {
    console.warn(
      "useSession could not access the browser storage. Session will be lost when closing browser window"
    );
  }
}

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

export async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  return responseJson;
}
