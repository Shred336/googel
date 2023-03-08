import React, { useState } from "react";

const GoogleSearch = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("all");

  const handleSubmit = (event) => {
    event.preventDefault();

    let url;
    if (searchType === "images") {
      url = `https://www.google.com/search?tbm=isch&q=${query}`;
    } else {
      url = `https://www.google.com/search?q=${query}`;
    }

    window.open(url, "_blank");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="buttons"
          id="searchBox"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          className="buttons"
          value={searchType}
          onChange={(event) => setSearchType(event.target.value)}
        >
          <option value="all">All Results</option>
          <option value="images">Images</option>
        </select>
        <button className="buttons" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default GoogleSearch;
