export const baseURL = "https://chat-app-backend-xi-brown.vercel.app/api";

export const postRequest = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Some error has occurred in the post request for registration");
    console.log(error);
  }
};
