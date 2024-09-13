import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function PaginatedGrid({ items }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  const displayedItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      <div className="grid-container">
        {displayedItems.map((item) => (
          <div className="grid-item" key={item.id}>
            {/* Render your item here */}
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(items.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
