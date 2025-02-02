import React, { useCallback, useState } from 'react';
import Count from './Count';
import IsFive from './IsFive';

let count = 0;

const Counters = () => {
    console.log(`Counters render: ${++count}`);

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);

    const foo = useCallback( () => {}, []);


    return (
      <div>
        <div>
          <button onClick={() => setCount1(count1 - 1)}>-</button>
          <Count value={count1} id={1} foo={foo} />
          <button onClick={() => setCount1(count1 + 1)}>+</button>
        </div>

        <div>
          <button onClick={() => setCount2(count2 - 1)}>-</button>
          <Count value={count2} id={2} foo={foo} />
          <button onClick={() => setCount2(count2 + 1)}>+</button>
          <IsFive value={count2} />
        </div>
      </div>
    );
}

export default Counters;
