import React from 'react'

const categories = [
  {
    id: 1,
    category: "Academic"
  }, 
  {
    id: 2,
    category: "Fiction"
  }
]

const sort = ["A-Z", "Latest", "Oldest", ]

const ControlTabs = ({setCategory}) => {
  return (
    <div>
      <select onChange={(e) => console.log(e.target.value)}>
        <option value="" disabled selected hidden>Sort by</option>
        {sort.map(sort => {
          return <option value={sort}>{sort}</option>
        })}
      </select>
      <select>
        <option value="" disabled selected hidden>Category</option>
        {categories.map(category => {
          return <option value={category.id}>{category.category}</option>
        })}
      </select>
      <button>Add Book</button>
    </div>
  )
}

export default ControlTabs;
