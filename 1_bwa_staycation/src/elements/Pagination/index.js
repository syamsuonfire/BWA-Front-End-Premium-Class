import propTypes from "prop-types";
import ReactPaginate from "react-paginate";

import "./index.scss";

export default function Pagination(props) {
  const { pageCount, changePage } = props;

  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel={`prev`}
        nextLabel={`next`}
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={2}
        renderOnZeroPageCount={null}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousbttn"}
        nextLinkClassName={"nextbttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
    // <nav aria-label="Page navigation" className={[outerClassName].join(" ")}>
    //   <ul className={["pagination", inputClassName].join(" ")}>
    //     <li className="page-item">
    //       <a
    //         className="page-link page-link-arrow"
    //         href="#"
    //         aria-label="Previous"
    //       >
    //         <span aria-hidden="true">&laquo;</span>
    //       </a>
    //     </li>
    //     <li className="page-item">
    //       <a className="page-link" href="#">
    //         1
    //       </a>
    //     </li>
    //     <li className="page-item">
    //       <a className="page-link" href="#">
    //         2
    //       </a>
    //     </li>
    //     <li className="page-item">
    //       <a className="page-link" href="#">
    //         3
    //       </a>
    //     </li>
    //     <li className="page-item">
    //       <a className="page-link page-link-arrow" href="#" aria-label="Next">
    //         <span aria-hidden="true">&raquo;</span>
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
}

Pagination.propTypes = {
  pageCount: propTypes.number.isRequired,
  changePage: propTypes.func.isRequired,
};
