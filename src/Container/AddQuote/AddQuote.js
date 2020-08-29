import React, { useState } from "react";
import PutNewQuoteForm from "../../Components/PutNewQuoteForm/PutNewQuoteForm";
import { categories } from "../../Constants/Constants";

export default function AddQuote() {
  const [data, setData] = useState({
    category: categories.id,
    author: "",
    text: "",
  });
  const onSubmit = event => {
    event.preventDefault();
    if (!data.author || !data.text) return;
    
  };
  return (
    <div className="AddQuote">
      <div className="container">
        <PutNewQuoteForm data={data} setData={setData} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
