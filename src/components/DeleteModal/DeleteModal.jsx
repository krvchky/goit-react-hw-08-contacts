import React from 'react';
import s from './DeleteModal.module.css';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/operations';
import { Toaster, toast } from 'react-hot-toast';

const DeleteModal = ({ isOpen, onClose, item }) => {
  const dispatch = useDispatch();
  const deleteNotify = () =>
    toast.success('Contact deleted from your contacts book');
  return (
    <>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.modalWraper}>
            <div className={s.modalWindow}>
              <button
                className={s.modaleClose}
                onClick={() => {
                  onClose();
                }}
              >
                <RxCross2 />
              </button>
              <h2>Are you sure you want to delete this contact?</h2>
              <div className={s.buttons}>
                <button
                  className={s.modalBtn}
                  onClick={() => {
                    if (item && item.id) {
                      dispatch(deleteContactThunk(item.id));
                      onClose();
                      deleteNotify();
                    }
                  }}
                >
                  Yes
                </button>
                <button
                  className={s.modalBtn}
                  onClick={() => {
                    onClose();
                  }}
                >
                  No
                </button>
                <Toaster position="top-center" reverseOrder={false} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;