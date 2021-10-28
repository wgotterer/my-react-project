import React from 'react'
import { useState } from 'react';



export default function AddEmpty() {
    const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);

    fetch("http://localhost:8000/recipes",{
    method:'PATCH',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(values)
  })
  .then(response => response.json())
  .then(data => console.log([data, ...fields]))
}

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  return (
    <div>
      {/* <h1>Add Ingredients</h1> */}

      <button type="button" onClick={() => handleAdd()}>
        +
      </button>

      {fields.map((field, idx) => {
        return (
         <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Add Ingredient"
              onChange={e => handleChange(idx, e)}
            />
            <button type="button" onClick={() => handleRemove(idx)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
