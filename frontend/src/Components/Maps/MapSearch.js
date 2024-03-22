import React, { useState } from "react";


const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export default function SearchBox({ handleSearchSelect }) {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="border w-full">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <input
            className="border p-2 m-2"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
        >
          <button
            variant="contained"
            color="primary"
            onClick={() => {
              // Search
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
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <ul aria-label="main mailbox folders">
          {listPlace.map((item) => {
            return (
              <div key={item?.place_id} className="border m-2 flex items-center p-1">
                <li
                  button
                  onClick={() => {
                    handleSearchSelect(item);
                  }}
                  className="flex gap-4 items-center"
                >
                  <img
                    src="/Assests/location-pin.png"
                    alt="Placeholder"
                    style={{ width: 38, height: 38 }}
                  />
                  <div>{item?.display_name}</div>
                </li>
                <br />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}