import React, { memo } from "react";

const render = {
  count1: 0,
  count2: 0,
};

const Count = ({ value, id, foo}) => {
  console.log(`Counter ${id} render: ${++render[`count${id}`]}`);

  return <strong>{value}</strong>;
};

export default memo(Count);
