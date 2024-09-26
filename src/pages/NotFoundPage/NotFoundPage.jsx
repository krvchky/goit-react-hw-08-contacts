import React from 'react';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.notFoundWrapper}>
      <img
        className={s.notFoundImage}
        src="https://www.pngitem.com/pimgs/m/144-1446523_transparent-angry-birds-png-png-download.png"
        alt=""
      />
      <h2 className={s.notFoundTitle}>Sorry, the page is no found</h2>
    </div>
  );
};

export default NotFoundPage;