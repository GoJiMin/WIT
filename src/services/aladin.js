import axios from "axios";

const aladinClient = axios.create({
  params: {
    ttbkey: "ttbgojimin30952008001",
    QueryType: "Bestseller",
    Version: 20131101,
    MaxResults: 10,
    Output: "JS",
  },
});

export async function searchToTag(CategoryId) {
  return await aladinClient
    .get("/api/ItemList.aspx", {
      params: {
        CategoryId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
