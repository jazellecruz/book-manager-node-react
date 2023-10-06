import {useEffect, useState} from 'react'
import "../styles/styles.css";
import BookForm from './BookForm';

const sort = ["A-Z", "Latest", "Oldest", ]

const ControlTabs = ({handleSetCategory, statusList, categoriesList, openBookForm}) => {

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
          {categoriesList.map(category => {
            return <option value={category.id}>{category.category}</option>
          })}
        </select>
        <select className="status">
          <option value="" disabled selected hidden>Status</option>
          {statusList.map(status=> {
            return <option value={status.id}>{status.status}</option>
          })}
        </select>
      </div>
      <div>
        <BookForm categoriesList={categoriesList} statusList={statusList} />
      </div>
    </div>
  )
}

export default ControlTabs;
