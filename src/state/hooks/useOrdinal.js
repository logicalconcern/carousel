import { useState } from 'react';

export default (items) => {
    const [direction, setDirection] = useState(0);
    const [ordinal, setOrdinal] = useState(0);

    const setOrdinalByDelta = (delta = 0) => {
        setDirection(delta);
        setOrdinal((ordinal + items + delta) % items);
    };

    return {
        direction,
        ordinal,
        navigation: {
            next: () => setOrdinalByDelta(1),
            prev: () => setOrdinalByDelta(-1),
        },
    };
};
