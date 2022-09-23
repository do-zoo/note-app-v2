import { getAccessToken } from "../../utils";

export async function fetchWithToken(url, options = {}) {
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
