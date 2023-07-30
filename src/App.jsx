import React, { useState } from "react";
import Header from "./components/Header/Header";
import JobListings from "./components/JobListings/JobListings";
import Attribution from "./components/Attribution/Attribution";
import data from "./data";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <>
      <Header
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <JobListings
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        data={data}
      />
      <Attribution />
    </>
  );
}

export default App;
