import React from 'react';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.homeWrapper}>
      {/* <img
        className={s.mainImg}
        src="https://img.freepik.com/premium-vector/phone-book-contacts-book-notebook-contact-information-business-partners-digital-communication_660702-152.jpg"
        alt="contacts book image"
      /> */}
      <h1 className={s.mainTitle}>
        Welcome to our page! We are glad to see you! Try our simple app to store
        your contacts. We would also love to hear your opinion about our
        product! Thank you
      </h1>
    </div>
  );
};

export default HomePage;