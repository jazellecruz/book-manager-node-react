import {useEffect, useState} from 'react'
import "../styles/styles.css";

const sort = ["A-Z", "Latest", "Oldest", ]

const ControlTabs = ({handleSetCategory, status, categories, openBookForm}) => {

  return (
    <div className="control-tab">
      <div>
        <select className="sort-by" onChange={(e) => console.log(e.target.value)}>
          <option value="" disabled selected hidden>Sort by</option>
          {sort.map(sort => {
            return <option value={sort}>{sort}</option>
          })}
        </select>
        <select className="category">
          <option value="" disabled selected hidden>Category</option>
          {categories.map(category => {
            return <option value={category.id}>{category.category}</option>
          })}
        </select>
        <select className="status">
          <option value="" disabled selected hidden>Status</option>
          {status.map(status=> {
            return <option value={status.id}>{status.status}</option>
          })}
        </select>
      </div>
      <div>
        <button className="add-book-btn" onClick={() => openBookForm()}>Add Book</button>
      </div>
    </div>
  )
}

export default ControlTabs;
