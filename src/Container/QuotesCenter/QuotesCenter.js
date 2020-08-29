import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import server from "../../server";
import "./QuotesCenter.css";
import '../../fontawasome/css/all.min.css';
import Grayback from "../../Components/grayback/Grayback";
import QouteItem from "../../Components/QouteItem/QouteItem";

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
                            <QouteItem key={key} path={key} editQuote={editQuote} quotes={quotes} deleteQuote={deleteQuote} />
                        ))}</>
                    ) : (<h3 className="if-no-quotes">No quotes. Add new qoute.</h3>)}
                </div>
            </div>
        </div>
    );

}
