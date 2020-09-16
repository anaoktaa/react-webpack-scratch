import React, { useEffect, useState } from 'react';

const CounterNumber = ({ start, end, delay }) => {
    const [ initialNumber, setInitialNumber ] = useState(start);  
    useEffect(() => {
      const counterNumber = () => {
            if (initialNumber < end) {
                setTimeout(() => {
                    setInitialNumber(initialNumber => initialNumber+1);
                    console.log('ini counter bukann', initialNumber);
                }, delay)
            }
      }
      counterNumber();
    }, [initialNumber])

    return (
        <span>{initialNumber}</span>
    )
};


export default CounterNumber;