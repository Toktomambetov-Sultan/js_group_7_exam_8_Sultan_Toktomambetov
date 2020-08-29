import React, { useState } from "react";
import Grayback from "../../Components/grayback/Grayback";
import PutNewQuoteForm from "../../Components/PutNewQuoteForm/PutNewQuoteForm";
import { categories } from "../../Constants/Constants";
import server from "../../server";

export default function AddQuote(props) {
  const [data, setData] = useState({
    category: categories[0].id,
    author: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = async event => {
    event.preventDefault();
    if (!data.author || !data.text) return;
    setLoading(true);
    await server.addNewQuote(data);
    setLoading(false);
    props.history.push({ pathname: "/category/all" });
  };
  return (
    <div className="AddQuote">
      <Grayback show={loading} />
      <div className="container">
        <PutNewQuoteForm data={data} setData={setData} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
