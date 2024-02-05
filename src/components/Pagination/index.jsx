import styles from "./Pagination.module.scss"
import ReactPaginate from 'react-paginate';
const Pagination = ({ setCurrentPage }) => {
   return (
      <ReactPaginate
         className={styles.root}
         breakLabel="..."
         nextLabel=" >"
         previousLabel="< "
         onPageChange={(e) => setCurrentPage(e.selected + 1)}
         pageRangeDisplayed={8}
         pageCount={4}
         renderOnZeroPageCount={null}
      />
   )
}

export default Pagination;