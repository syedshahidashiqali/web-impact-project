import axios from "axios";

const URL = "https://dummyjson.com/users";

export const getUsers = async (): Promise<any> => {
  const { data } = await axios.get(URL);
  return data;
};

export const getUserById = async (userId: string): Promise<any> => {
  const { data } = await axios.get(`${URL}/${userId}`);
  return data;
};
