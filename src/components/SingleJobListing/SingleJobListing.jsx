import React from "react";
import "./SingleJobListing.css";

const SingleJobListing = ({
  jobListing: {
    company,
    featured,
    new: isNew,
    logo,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  selectedCategories,
  setSelectedCategories,
}) => {
  const categories = [role, level, ...languages, ...tools];

  const selectCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category])
    }
  };

  return (
    <article
      className={`single-job-listing box-design ${featured && "is-featured"}`}
    >
      <div className="listing-details">
        <img src={logo} alt={company} />
        <div className="info">
          <header>
            <span className="company">{company}</span>
            <div className="tags">
              {isNew && <span className="new">new!</span>}
              {featured && <span className="featured">featured</span>}
            </div>
          </header>
          <h4>{position}</h4>
          <div className="extra-info">
            <span>{postedAt}</span>
            <span className="dot">.</span>
            <span>{contract}</span>
            <span className="dot">.</span>
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <button
            type="button"
            key={index}
            className="btn select-filter-btn"
            onClick={() => {
              selectCategory(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </article>
  );
};
export default SingleJobListing;
