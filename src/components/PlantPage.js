import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search"; 

function PlantPage() {
  const [plantsToShow, setPlantsToShow] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlantsToShow(data));
  }, []);

  const onAddPlant = newPlant => {
    setPlantsToShow(prevPlants => [...prevPlants, newPlant]);
  };

  const handleDelete = (deletePlantId) =>
    setPlantsToShow(plantsToShow.filter((plant) => plant.id !== deletePlantId));

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onChange={setSearchText} />
      <PlantList plantsToShow={plantsToShow} searchText={searchText} onDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
