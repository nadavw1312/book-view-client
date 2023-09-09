"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Pagination.module.css";
import { generateArrayFromOneToN } from "../lib/helpers";

const Pagination = ({
  items,
  handlePageChange,
}: {
  items: unknown[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlePageChange: (items: any[]) => void;
}) => {
  const perPageArray = [10, 20, 30, 40, 50];
  const [perPage, setPerPage] = useState(10);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(items.length / perPage)
  );

  useEffect(() => {
    const currTotalPages = Math.ceil(items.length / perPage);
    setTotalPages(currTotalPages);
    const pageItems = items.slice(perPage * (currPage - 1), perPage * currPage);
    handlePageChange(pageItems);
    if (currPage > currTotalPages) {
      setCurrPage(1);
    }
  }, [items, perPage, currPage]);

  return (
    <div className={`${styles.pagination} bg-slate-500 mt-2 rounded-md p-2`}>
      <div className={styles.perPageSelectorContainer}>
        <label>
          Rows per page:
          <select
            onChange={(e) => setPerPage(Number(e.target.value))}
            className={styles.rowPerPageSelect}
            style={{ width: "100px" }}
          >
            {perPageArray.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.changePageRow}>
        <button
          className={styles.actionButton}
          onClick={() => {
            currPage > 1 && setCurrPage(currPage - 1);
          }}
        >
          Prev
        </button>
        <div className={styles.pagesContainer}>
          {totalPages >= 1 &&
            generateArrayFromOneToN(totalPages).map((page) => (
              <div
                key={page}
                className={`${styles.page} ${
                  page === currPage && styles.selected
                }`}
                onClick={() => setCurrPage(page)}
              >
                {page}
              </div>
            ))}
        </div>

        <button
          className={styles.actionButton}
          onClick={() => {
            currPage < totalPages && setCurrPage(currPage + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Pagination;
