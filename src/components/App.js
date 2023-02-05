import { useState } from "react";

function App() {
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [description, setDescription] = useState(null);
  const [category_id, setCategory_id] = useState(null);
  const [status_id, setStatus_id] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, author, description, category_id, status_id);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label for="title">Title:</label>
        <input type="text" value={title}  onChange={(e) => setTitle(e.target.value)} name="title"></input>
        <br></br>
        <label for="author">Author:</label>
        <input type="text" value={author}  onChange={(e) => setAuthor(e.target.value)} name="author"></input>
        <br></br>
        <label for="description">Description:</label>
        <input type="text" value={description}  onChange={(e) => setDescription(e.target.value)} name="description"></input>
        <br></br>
        <label for="category_id">Category</label>
        <select name="category_id" value={category_id} onChange={(e) => setCategory_id(e.target.value)} >
          <option value="" disabled selected>Select a category</option>
          <option value="1">Academic</option>
        </select>
        <br></br>
        <label for="status_id">Status</label>
        <select name="status_id" placeholder="status" onChange={(e) => setStatus_id(e.target.value)} value={status_id}>
          <option value="" disabled selected>Select a status</option>
          <option value="1">Finished</option>
        </select>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
