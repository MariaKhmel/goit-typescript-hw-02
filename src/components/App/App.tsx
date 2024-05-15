import { useEffect, useState } from "react";

import fetchPicturesByQuery from "../fetchpictures-api";
import { Toaster } from "react-hot-toast";

import Searchbar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { HandleSearchBarSubmitFunction, VoidFunction } from "../types";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setLoading(true);
        if (!query) {
          return;
        }
        const data = await fetchPicturesByQuery(query, page);

        setImages((prevImages) => {
          const newImages =
            page === 1 ? data.results : [...prevImages, ...data.results];
          console.log(newImages);
          return newImages;
        });

        setTotalPages(data["total_pages"]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [query, page]);

  const openModal = (img: string) => {
    setModal(img);
    setModalOpen(true);
  };

  const closeModal: VoidFunction = () => {
    setModalOpen(false);
  };

  const handleSearchBarSubmit: HandleSearchBarSubmitFunction = (value) => {
    setQuery(value);
    setPage(1);
  };

  const onLoadMore: VoidFunction = () => {
    setPage((prevpage: number) => prevpage + 1);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Searchbar onSubmit={handleSearchBarSubmit}></Searchbar>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} openModal={openModal} />
          <LoadMoreBtn onLoadMore={onLoadMore} disabled={totalPages === page} />
        </>
      )}
      {modal && (
        <ImageModal
          modalImg={modal}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
