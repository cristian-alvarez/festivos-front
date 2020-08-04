import React from "react";
import { Pagination as PaginationAntd } from "antd";

import "./Pagination.scss";

export default function Pagination(props) {
  const { holidays, location, history } = props;
  const currentPage = parseInt(holidays.page);

  const onChangePage = newPage => {
    history.push(`${location.pathname}?page=${newPage}`);
  };

  return (
    <PaginationAntd
      defaultCurrent={currentPage}
      total={holidays.total}
      pageSize={holidays.limit}
      onChange={(newPage) => onChangePage(newPage)}
      className="pagination"
    />
  );
}
