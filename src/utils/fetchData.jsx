import axios from "axios";

export const fetchData = async () => {
  const url =
    "https://spotify23.p.rapidapi.com/search/?q=davido&type=multi&offset=0&limit=3&numberOfTopResults=5"; // Corrected URL

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3fd3644339msh6045c5ba64088d1p1a9551jsn681cf9e7df96",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.get(url, options);

    console.log("API Response:", response.data.albums);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
