const { default: Axios } = require("axios");

const server = {
  addNewQuote: async function ({ text, author, category }) {
    await Axios.post("https://quote-srv.firebaseio.com/quotes.json", {
      text,
      author,
      category,
    });
  },
  getAllQoutes: async function () {
    return (await Axios.get("https://quote-srv.firebaseio.com/quotes.json"))
      .data;
  },
  getQoutesByCategory: async function (category) {
    const params = {
      orderBy: '"category"',
      equalTo: '"' + category + '"',
    };
    return (await Axios.get(
      "https://quote-srv.firebaseio.com/quotes.json?" +
      new URLSearchParams(params).toString()
    )).data;
  },
  deleteByPath: async path => {
    await Axios.delete(
      "https://quote-srv.firebaseio.com/quotes/" + path + ".json"
    );
  },
  getByPath: async path => {
    return (await Axios.get("https://quote-srv.firebaseio.com/quotes/" + path + ".json")).data;
  },
  putByPath: async (path, { text, author, category }) => {
    await Axios.put("https://quote-srv.firebaseio.com/quotes/"+path+".json", {
      text,
      author,
      category,
    });
  }
};
export default server;
