const { default: Axios } = require("axios");

const server = {
  addNewQuote: async function({ text, author, category }) {
    await Axios.post("https://quote-srv.firebaseio.com/quotes.json", {
      text,
      author,
      category,
    });
  },
  getAllQoutes: async function() {
    return (await Axios.get("https://quote-srv.firebaseio.com/quotes.json"))
      .data;
  },
};
export default server;
