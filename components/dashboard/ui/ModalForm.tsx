"use client";
import { Button } from "@/components/ui";
import { useState } from "react";

interface ModalFormProps {
  children: React.ReactNode;
  className?: string;
  buttonName: string;
}

const ModalForm = ({ children, buttonName }: ModalFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-form">
      <Button
        className="btn"
        onClick={() => {
          handleOpen();
          console.log(`${buttonName} Button clicked`);
        }}
      >
        {buttonName}
      </Button>
      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <div className="flex gap-2">{children}</div>
            <Button className="btn" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
