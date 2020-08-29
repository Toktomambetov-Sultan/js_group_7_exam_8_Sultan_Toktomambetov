import React, { useState, useEffect } from "react";
import PutNewQuoteForm from '../../Components/PutNewQuoteForm/PutNewQuoteForm';
import { categories } from "../../Constants/Constants";
import server from "../../server";
import Grayback from '../../Components/grayback/Grayback';

export default function EditPage(props) {
  const [data, setData] = useState({
    category: categories[0].id,
    author: "",
    text: "",
  });
  useEffect(() => {
    const initData = async () => {
      const response = await server.getByPath(props.match.params.path);
      setData(response);
    };
    initData().catch(console.error);
  }, [props]);
  const [loading, setLoading] = useState(false);
  const onSubmit = async event => {
    event.preventDefault();
    if (!data.author || !data.text) return;
    setLoading(true);
    await server.putByPath(props.match.params.path, data);
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