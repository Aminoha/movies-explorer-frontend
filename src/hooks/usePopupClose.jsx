import { useEffect } from 'react';

const usePopupClose = (isOpen, closePopup) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleOverlay = (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOverlay);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOverlay);
    };
  }, [isOpen, closePopup]);
};

export default usePopupClose;
