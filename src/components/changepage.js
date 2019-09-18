import React from 'react';
import { Icon, Pagination } from 'semantic-ui-react';

const ChangePage = (props) => {
  return (
    <Pagination
      defaultActivePage={1}
      totalPages={10}
      onPageChange={(e, data) => props.handlePageChange(data.activePage)
      }
    />
  )
}

export default ChangePage;