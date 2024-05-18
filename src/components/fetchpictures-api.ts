import axios from "axios";
const key: Key = "UkUvtFMmD5oVuyg6VqxNecHCXdBh4jU0Efit5U6Q764";

type Key = string;
type Params = {
  params: {
    client_id: Key;
  };
};
const params = {
  params: {
    client_id: key,
  },
};

axios.defaults.baseURL = "https://api.unsplash.com";

const fetchPicturesByQuery = async (
  searchText: string,
  page: number
): Promise<ReturnType<typeof response.data>> => {
  const response = await axios.get(
    `/search/photos?page=${page}&per_page=20&query=${searchText}`,
    params
  );

  return response.data;
};

export default fetchPicturesByQuery;
