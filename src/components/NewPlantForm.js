import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({ name: "", image: "", price: "" });

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        price: formData.price
      })
    })
      .then(res => res.json())
      .then(data => {
        onAddPlant(data);
        setFormData({ name: "", image: "", price: "" });
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Plant Name:
          <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} />
        </label>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
