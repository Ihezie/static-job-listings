import React from "react";
import "./SelectedCategories.css";

const SelectedCategories = ({ selectedCategories, setSelectedCategories }) => {
  const removeFilter = (selectedCategory) => {
    const newSelectedCategories = selectedCategories.filter(
      (item) => item !== selectedCategory
    );
    setSelectedCategories(newSelectedCategories);
  };
  return (
    <section className="box-design selected-categories">
      <ul>
        {selectedCategories.map((selectedCategory) => {
          return (
            <li type="button" className="btn" key={selectedCategory}>
              <span>{selectedCategory}</span>
              <button
                className="remove-filter-btn"
                onClick={() => {
                  removeFilter(selectedCategory);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="clear-btn"
        onClick={() => {
          setSelectedCategories([]);
        }}
      >
        clear
      </button>
    </section>
  );
};
export default SelectedCategories;
