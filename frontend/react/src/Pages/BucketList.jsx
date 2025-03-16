import React, { useState } from "react";
import "./BucketList.css";
import { FaTrash, FaPlus } from "react-icons/fa";

const BucketList = () => {
  const [places, setPlaces] = useState(["Canada", "Bali"]);
  const [newPlace, setNewPlace] = useState("");

  const addPlace = () => {
    if (newPlace.trim() !== "") {
      setPlaces([...places, newPlace]);
      setNewPlace("");
    }
  };

  const removePlace = (placeToRemove) => {
    setPlaces(places.filter((place) => place !== placeToRemove));
  };

  return (
    <div className="bucket-container">
      <h1 className="title">🌍 My Travel Bucket List</h1>

      <div className="input-section">
        <input
          type="text"
          className="input-box"
          placeholder="Add a new place..."
          value={newPlace}
          onChange={(e) => setNewPlace(e.target.value)}
        />
        <button className="add-button" onClick={addPlace}>
          <FaPlus />
        </button>
      </div>

      <ul className="bucket-list">
        {places.map((place, index) => (
          <li key={index} className="bucket-item">
            {place}
            <button className="delete-button" onClick={() => removePlace(place)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BucketList;
