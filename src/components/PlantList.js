import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToShow, searchText, onDelete}) {
  const filteredPlantsList = plantsToShow.filter(plant =>
    plant.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderPlantsToPage = filteredPlantsList.map(plant => (
    <PlantCard
      key={plant.id}
      plantId={plant.id}
      plantName={plant.name}
      plantImage={plant.image}
      plantPrice={plant.price}
      onDelete={onDelete}
    />
  ));

  return <ul className="cards">{renderPlantsToPage}</ul>;
}

export default PlantList;
