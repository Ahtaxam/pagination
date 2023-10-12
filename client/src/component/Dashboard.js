import React, { useState } from "react";

const data = ["xyz", "abc", "asdf", "kcddv", "chsdjhc", "cjsbdhc", "cgsdj"];
function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const p = Math.ceil(data.length / 3);
  console.log("p: ", p);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 1 ? p : currentPage - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === p ? 1 : currentPage + 1));
  };

  return (
    <div>
      <h2>Posts data</h2>
      <div>
        <button className="prev-button" onClick={handlePrevious}>
          Previous
        </button>
        {currentPage} of {p}
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
