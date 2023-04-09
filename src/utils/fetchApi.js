import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST,
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY
    }
  });

  return data;
};