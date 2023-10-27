import axios from "axios";

const aladinClient = axios.create({
  params: {
    ttbkey: import.meta.env.VITE_ALADIN_API_KEY,
    QueryType: "Bestseller",
    Version: 20131101,
    MaxResults: 15,
    Output: "JS",
  },
});

const randomDate = () => {
  const year = 2019 + Math.random() * 4;
  const month = Math.random() * 9 + 1;
  const week = Math.random() * 4 + 1;
  return [year, month, week];
};

export async function searchToTag(CategoryId) {
  const date = randomDate();
  return await aladinClient
    .get("/api/ItemList.aspx", {
      params: {
        year: date[0],
        month: date[1],
        week: date[2],
        CategoryId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function serchToTagMock() {
  return await axios
    .get("/public/bookDataMock.json")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
