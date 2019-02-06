import React, { Suspense, lazy } from 'react';
import classnames from 'classnames';
import Preloader from '../Preloader';
import styles from "./index.css";

const Item = lazy(() => import('../Item'));

export default ({ data, direction, ordinal }) => {
    console.log(direction, ordinal)
    const items = data.length
    return (
      <div className={styles.container}>
        <ol className={classnames(
          styles.carousel,
          { [styles.reversing]: direction === -1 },
          { [styles.ready]: true }
        )}>
          {data.map((item, index) => 
            <Suspense 
              key={item.previewURL} 
              fallback={<Preloader.Item />}
            >
              <Item 
                data={item} 
                index={index} 
                items={items} 
                ordinal={ordinal}
              />
            </Suspense>)}
        </ol>
      </div>
    );
  };