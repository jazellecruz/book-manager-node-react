import BookForm from './BookForm';

const sort = ["A-Z", "Latest", "Oldest", ]

const ControlTabs = ({statusList, categoriesList, updateAndRefreshView, updateSnackbarType, showSnackbar}) => {
  return (
    <div className="control-tab">
      <div>
        <select className="sort-by">
          <option value="" disabled selected hidden>Sort by</option>
          {sort.map(sort => {
            return <option value={sort}>{sort}</option>
          })}
        </select>
        <select className="category">
          <option value="" disabled selected hidden>Category</option>
          {categoriesList.map(category => {
            return <option value={category.category_no}>{category.category_name}</option>
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
        <BookForm 
          categoriesList={categoriesList} 
          statusList={statusList} 
          updateAndRefreshView={updateAndRefreshView}
          showSnackbar={showSnackbar}
          updateSnackbarType={updateSnackbarType}
        />
      </div>
    </div>
  )
}

export default ControlTabs;
