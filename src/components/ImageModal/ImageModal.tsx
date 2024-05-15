import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import React from "react";
import { VoidFunction } from "../types";

type ImageModalProps = {
  modalImg: string;
  isModalOpen: boolean;
  closeModal: VoidFunction;
};

const ImageModal: React.FC<ImageModalProps> = ({
  modalImg,
  isModalOpen,
  closeModal,
}) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      overlayClassName={css.overlay}
      className={css.modalImg}
    >
      <img src={modalImg} alt="modal image" className={css.image} />
    </ReactModal>
  );
};

export default ImageModal;
