import React from "react";

const Categories = ({ category, onClick }) => {
  const handleClick = () => {
    onClick(category);
  };
  return (
    <div className="link-8" onClick={handleClick}>
      <div className="overlap-group-4">
        <div className="heading-new-york">{category}</div>
        {/* <div className="text-wrapper-17">8 Properties</div> */}
      </div>
    </div>
  );
};

export default Categories;
