import React from 'react';
import { categories } from "../../Constants/Constants";
import './QuoteItem.css';

export default function QouteItem({ path, editQuote, quotes, deleteQuote }) {
    return (
        <div className="quote">
            <p className="quote__text">{quotes[path].text}</p>
            <div className="qoute__btns" >
                <button onClick={() => editQuote(path)}>
                    <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => deleteQuote(path)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
            <span className="quote__category">Category: {
                categories.find(item => item.id === quotes[path].category).name
            }</span>
            <span className="quote__author">-{quotes[path].author}</span>
        </div>
    );
}
