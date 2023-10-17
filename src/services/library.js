import { axios } from "axios";

const client = axios.create({
  params: {
    baseURL: "http://data4library.kr/api",
    authKey: import.meta.env.VITE_LIBRARY_API_KEY,
    pageSize: 10,
    format: "json",
  },
});

export async function libraryLocation(isbn, region) {
  return await client.get("/libSrchByBook", {
    params: {
      isbn,
      region,
    },
  });
}

export async function libraryLocationMock() {
  return await axios
    .get("src/data/libraryMock.json")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
