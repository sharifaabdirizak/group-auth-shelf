import React, { useState } from "react";
import { useDispatch } from "react-redux";


function ShelfPage() {
  const [url, setUrl] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();


  const submitForm = () => {
    dispatch({type: "ADD_ITEM_TO_SHELF", payload: { url: url, description: description}})
  }
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <form onSubmit={submitForm}>
        <label>url</label>
        <input onChange={(e) => setUrl(e.target.value)} value={url} />

        <label>description</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </form>
    </div>
  );
}

export default ShelfPage;
