import axios from "axios";

const aladinClient = axios.create({
  params: {
    ttbkey: import.meta.env.VITE_ALADIN_API_KEY,
    Output: "JS",
    Cover: "Big",
    Version: 20131101,
  },
});

const randomDate = () => {
  const year = 2019 + Math.floor(Math.random() * (4 - 1) + 1);
  const month = Math.floor(Math.random() * (11 - 1) + 1);
  const week = Math.floor(Math.random() * (4 - 1) + 1);
  return [year, month, week];
};

export async function searchToTag(CategoryId) {
  const date = randomDate();
  return await aladinClient
    .get("/api/ItemList.aspx", {
      params: {
        QueryType: "Bestseller",

        MaxResults: 15,
        year: date[0],
        month: date[1],
        week: date[2],
        CategoryId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function searchToKeyword(Query, page) {
  return await aladinClient
    .get("/api/ItemSearch.aspx", {
      params: {
        Query,
        QueryType: "Keyword",
        MaxResults: 10,
        start: page,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
