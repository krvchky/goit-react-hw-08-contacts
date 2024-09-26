import React, { useState } from 'react';
import s from './Contact.module.css';
import { RxCross2 } from 'react-icons/rx';
import DeleteModal from '../DeleteModal/DeleteModal';
import { CiEdit } from 'react-icons/ci';
import EditContactForm from '../EditContactForm/EditContactForm';

const Contact = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  return (
    <div className={s.contactWraper}>
      <div className={s.infoWrapper}>
        <p className={s.nameBox}>{item.name}</p>
        <p className={s.numberBox}>{item.number}</p>
      </div>

      <div className={s.buttons}>
        <button
          className={s.editBtn}
          onClick={() => {
            setEditModalIsOpen(true);
          }}
        >
          <CiEdit />
        </button>

        <button
          className={s.deleteBtn}
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          <RxCross2 />
        </button>
      </div>

      <DeleteModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        item={item}
      />

      <EditContactForm
        isOpen={editModalIsOpen}
        onClose={() => setEditModalIsOpen(false)}
        item={item}
      />
    </div>
  );
};

export default Contact;