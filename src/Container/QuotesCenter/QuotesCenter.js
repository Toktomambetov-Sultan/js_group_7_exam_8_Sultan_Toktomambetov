import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import server from "../../server";

export default function QuotesCenter(props) {
  const [quotes, setQuotes] = useState(null);
  const initQuotes = async () => {
    const response = await server.getAllQoutes();
    setQuotes(response);
  };
  useEffect(() => {
    initQuotes().catch(console.error);
  }, []);
  return (
    <div className="QuotesCenter">
      <Sidebar />
    </div>
  );
}
