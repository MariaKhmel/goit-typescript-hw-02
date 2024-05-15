import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { OpenModal } from "../types";

type ImageGalleryProps = {
  images: {
    id: number;
    urls: {
      regular: string;
      small: string;
    };
    description: string;
  }[];
  openModal: OpenModal;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.imageList}>
      {images.map(({ id, urls, description }) => (
        <li key={id} className={css.imageItem}>
          <ImageCard
            description={description}
            urls={urls}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
