import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export function useModal({
  enableScrollLock,
  disableScrollLock,
  handleResetRegion,
  handleConfirm,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { setSizing } = useOutletContext();

  const open = () => {
    enableScrollLock();
    setIsOpen(true);
  };

  const close = () => {
    disableScrollLock();
    setIsOpen(false);
    handleResetRegion && handleResetRegion();
    setSizing && setSizing(false);
  };

  const confirm = () => {
    handleConfirm();
  };

  return { isOpen, open, confirm, close };
}
