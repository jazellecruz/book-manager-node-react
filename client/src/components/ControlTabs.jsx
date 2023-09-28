import {useEffect, useState} from 'react'
import "../styles/styles.css";

// const categories = [
//   {
//     id: 1,
//     category: "Academic"
//   }, 
//   {
//     id: 2,
//     category: "Fiction"
//   },
//   {
//     id: 3,
//     category: "Religion and Spirituality"
//   },

// ]

const status = [
  {
    id: 1,
    status: "Finished"
  }, 
  {
    id: 2,
    status: "Currently Reading"
  },
  {
    id: 3,
    status: "To Be Read"
  },
  {
    id: 4,
    status: "Wishlist"
  }
]

const sort = ["A-Z", "Latest", "Oldest", ]

const ControlTabs = ({setCategory}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories")
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setCategories([...res]);
    })
    .catch();

  }, []);

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
        <button className="add-book-btn">Add Book</button>
      </div>
    </div>
  )
}

export default ControlTabs;
