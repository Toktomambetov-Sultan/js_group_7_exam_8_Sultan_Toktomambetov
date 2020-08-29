import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import server from "../../server";
import "./QuotesCenter.css";
import { categories } from "../../Constants/Constants";

export default function QuotesCenter(props) {
    const [quotes, setQuotes] = useState(null);
    const initQuotes = async () => {
        const category = props.match.params.category;
        let response;
        if(category==='all')
         response = await server.getAllQoutes();
         else response = await server.getQoutesByCategory(category);
        setQuotes(response);
    };
    useEffect(() => {
        initQuotes().catch(console.error);
    }, [props]);
    return (
        <div className="QuotesCenter">
            <div className="container inner">
                <Sidebar />
                <div className="quotes-list">
                    {quotes ? (<>
                        {Object.keys(quotes).map(key => (
                            <div className="quote" key={key}>
                                <p className="quote__text">{quotes[key].text}</p>
                                <div className="qoute__btns" />
                                <span>Category: {
                                    categories.find(item=>item.id===quotes[key].category).name
                                }</span>
                                <span className="quote__author">-{quotes[key].author}</span>
                            </div>
                        ))}</>
                    ) : (<h3>No quotes.Add new qoute.</h3>)}
                </div>
            </div>
        </div>
    );
}
