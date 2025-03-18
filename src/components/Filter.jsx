import React from "react";
import styled from "styled-components";

const FilterCont = styled.div`
  padding: 1.5rem 0;
`;

const StyledInput = styled.input`
  border: 2px solid #ffc404;
  outline: none;
  max-width: 768px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
`;

function Filter({ onChangeFilter, userSearch }) {
  return (
    <FilterCont>
      <StyledInput
        type="text"
        placeholder="Search..."
        onChange={onChangeFilter}
        value={userSearch}
      />
    </FilterCont>
  );
}

export default Filter;
