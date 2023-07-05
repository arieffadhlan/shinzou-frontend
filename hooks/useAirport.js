import axios from "axios";

const useAirport = async () => {
  try {
    const response = await axios.get("https://shinzou-api.up.railway.app/api/v1/airport")
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export default useAirport;