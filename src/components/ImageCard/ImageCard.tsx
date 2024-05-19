import React from "react";
import css from "./ImageCard.module.css";
import { OpenModal, Urls } from "../types";

type ImageCardProps = {
  description: string;
  urls: Urls;
  openModal: OpenModal;
};

function ImageCard({
  description,
  urls: { regular, small },
  openModal,
}: ImageCardProps) {
  return (
    <div>
      <img
        className={css.imageCard}
        src={small}
        alt={description}
        onClick={() => openModal(regular)}
      />
    </div>
  );
}

export default ImageCard;
