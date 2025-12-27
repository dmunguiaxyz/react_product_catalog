import './pagination.css';

export default function Pagination(props: {
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
}) {
  const { totalPages, handlePageChange } = props;
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    const pageNumber = i + 1;
    pages.push(
      <li
        key={`page-${i}`}
        className="page-item"
        onClick={() => handlePageChange && handlePageChange(pageNumber)}
      >
        {pageNumber}
      </li>
    );
  }
  return (
    <div className="pagination-container">
      <ul className="pagination">{pages}</ul>
    </div>
  );
}
