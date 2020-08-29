import React from "react";
import { categories } from "../../Constants/Constants";
import "./PutNewQuoteForm.css";
export default function PutNewQuoteForm({ data, setData, onSubmit }) {
  return (
    <div className="PutNewQuoteForm">
      <form onSubmit={e => onSubmit(e).catch(console.error)}>
        <div className="form-group">
          <label>
            <span className="form-name">Author:</span>
            <input
              value={data.author}
              onChange={e =>
                setData({
                  ...data,
                  author: e.target.value,
                })}
              type="text"
              className="author-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="form-name">Category:</span>
            <select
              value={data.category}
              onChange={e => setData({ ...data, category: e.target.value })}
              className="custom-select"
            >
              {categories.map(category => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="form-name">Quote:</span>
            <textarea
              className="textarea"
              value={data.text}
              onChange={e =>
                setData({
                  ...data,
                  text: e.target.value,
                })}
            />
          </label>
        </div>
        <button type="submit" className="submit">
          submit
        </button>
      </form>
    </div>
  );
}
