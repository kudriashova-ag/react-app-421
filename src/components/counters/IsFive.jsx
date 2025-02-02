import React, { memo, useMemo } from 'react';

let count = 0;
const IsFive = ({ value }) => {
    console.log(`IsFive render: ${++count}`);

    const getResult = () => { 
        let i = 0;
        while (i < 1000000000) { i++; }
        return value === 5 ? <span>It's 5</span> : <span>It's not 5</span>;
    }

    const result = useMemo(getResult, [value]);


    return <div>{result}</div>;
}

export default memo(IsFive, (prevProps, nextProps) => { 
    // false - render
    // console.log(prevProps, nextProps);
    return nextProps.value !== 5 && prevProps.value !== 5;
});
