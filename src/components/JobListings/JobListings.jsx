import React, { useState, useEffect } from "react";
import "./JobListings.css";
import SingleJobListing from "../SingleJobListing/SingleJobListing";

const JobListings = ({ data, selectedCategories, setSelectedCategories }) => {
  const [jobListings, setJobListings] = useState(data);

  const checkIsSubset = (item) => {
    const { role, level, languages, tools } = item;
    const categories = [role, level, ...languages, ...tools];

    const isSubset = selectedCategories.every((selectedCategory) =>
      categories.includes(selectedCategory)
    );
    return isSubset;
  };

  const filterListings = () => {
    if (selectedCategories.length > 0) {
      const newListings = data.filter((jobListing) =>
        checkIsSubset(jobListing)
      );
      setJobListings(newListings);
    } else {
      setJobListings(data);
    }
  };

  useEffect(filterListings, [selectedCategories]);

  return (
    <main className="container">
      {jobListings.map((jobListing) => (
        <SingleJobListing
          jobListing={jobListing}
          key={jobListing.id}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      ))}
    </main>
  );
};
export default JobListings;
