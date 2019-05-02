import React from 'react';
import LazyLoad from 'react-lazyload';
import styles from "./index.module.css";

export default ({ data, index, items, ordinal }) => {
  // console.log(data.likes, data.user)
    const target = ( index + 1 ) + ordinal
    const actual = target > items ? target - items : target
    const order = { order: actual }
    return (
      <li className={styles.item} style={order}>
          <LazyLoad height={320} >
              <img width="100%" height={320} src={data.largeImageURL} />
          </LazyLoad>
      </li>
    )
}