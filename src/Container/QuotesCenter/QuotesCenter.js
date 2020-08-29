import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import server from "../../server";
import "./QuotesCenter.css";
import { categories } from "../../Constants/Constants";
import '../../fontawasome/css/all.min.css';
import Grayback from "../../Components/grayback/Grayback";

export default function QuotesCenter(props) {
    const [quotes, setQuotes] = useState({});
    const [loading, setLoading] = useState(false);
    const initQuotes = async () => {
        const category = props.match.params.category;
        let response;
        if (category === 'all')
            response = await server.getAllQoutes();
        else response = await server.getQoutesByCategory(category);
        setQuotes(response ? response : {});
    };
    const initQuotesCallBack = useCallback(
        initQuotes
        , [props]);
    useEffect(() => {
        initQuotesCallBack().catch(console.error);
        console.log("update");
    }, [props, initQuotesCallBack]);
    const deleteQuote = async (path) => {
        setLoading(true);
        await server.deleteByPath(path);
        await initQuotes();
        setLoading(false);
    };
    const editQuote = (key) => {
        props.history.push({
            pathname: "/qoute/" + key
        });
    };
    return (
        <div className="QuotesCenter">
            <Grayback show={loading} />
            <div className="container inner">
                <Sidebar />
                <div className="quotes-list">
                    {Object.keys(quotes).length ? (<>
                        {Object.keys(quotes).map(key => (
                            <div className="quote" key={key}>
                                <p className="quote__text">{quotes[key].text}</p>
                                <div className="qoute__btns" >
                                    <button onClick={() => editQuote(key)}>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button onClick={() => deleteQuote(key)}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                                <span className="quote__category">Category: {
                                    categories.find(item => item.id === quotes[key].category).name
                                }</span>
                                <span className="quote__author">-{quotes[key].author}</span>
                            </div>
                        ))}</>
                    ) : (<h3 className="if-no-quotes">No quotes. Add new qoute.</h3>)}
                </div>
            </div>
        </div>
    );

}
