import "./Header.css";
import React, { useState, useEffect } from "react";
import SelectedCategories from "../SelectedCategories/SelectedCategories";

const Header = ({ selectedCategories, setSelectedCategories }) => {
  const [headerMargin, setHeaderMargin] = useState("5rem");

  const calcHeaderMargin = () => {
    setHeaderMargin("5rem");
    if (innerWidth <= 735 || selectedCategories.length > 0) {
      setHeaderMargin("7rem");
    }
    if (selectedCategories.length > 0 && innerWidth <= 735) {
      setHeaderMargin("15rem");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", calcHeaderMargin);
    calcHeaderMargin();
    return () => {
      window.removeEventListener("resize", calcHeaderMargin);
    };
  }, [selectedCategories]);

  return (
    <header
      style={{
        marginBottom: headerMargin,
      }}
    >
      {selectedCategories.length === 0 || (
        <SelectedCategories
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      )}
    </header>
  );
};

export default Header;
