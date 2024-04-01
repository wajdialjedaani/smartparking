import React, { useCallback, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./SearchBox.css"; // Import CSS file for styling

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

export default function SearchBox({ handleSearchSelect, searchResult }) {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const setInitials = () => {
    console.log(searchResult, "kjshfkjshfkjs")
    setSearchText(searchResult ? searchResult.display_name : "");
    setListPlace([]);
    setIsLoaded(false);
  };
  useEffect(() => {
    setInitials()
  }, [searchResult])
  const searchAddress = useCallback(() => {
    setIsLoaded(true);

    const params = {
      q: searchText,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setListPlace(result);
        setIsLoaded(false);
      })
      .catch((err) => {
        setIsLoaded(false);
        console.error("Error fetching data:", err);
      });
  }, [searchText]);

  return (
    <div className="search-box-container">
      <div className="search-input-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a place..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button onClick={searchAddress} className="search-button">
          Search
        </button>
      </div>
      <div className="search-results-container">
        {isLoaded ? (
          <div className="loading-spinner">
            <CircularProgress />
          </div>
        ) : (
          <ul className="search-results-list">
            {listPlace.map((item) => (
              <li key={item?.place_id} className="search-result-item">
                <button
                  onClick={() => {
                    handleSearchSelect(item);
                    setInitials()
                  }}
                  className="search-result-button"
                >
                  <img
                    src="/Assests/location-pin.png"
                    alt="Location Pin"
                    className="location-pin-image"
                  />
                  <span className="location-name">{item?.display_name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
