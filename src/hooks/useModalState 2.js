import { useState } from 'react';

export const useModalState = (initialModals = {}) => {
  const [modals, setModals] = useState(initialModals);

  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }));
  };

  const toggleModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: !prev[modalName] }));
  };

  const closeAllModals = () => {
    setModals(prev => {
      const closed = {};
      Object.keys(prev).forEach(key => {
        closed[key] = false;
      });
      return closed;
    });
  };

  return {
    modals,
    openModal,
    closeModal,
    toggleModal,
    closeAllModals
  };
};
