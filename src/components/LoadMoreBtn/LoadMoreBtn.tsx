import { VoidFunction } from "../types";
import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onLoadMore: VoidFunction;
  disabled: boolean;
};

function LoadMoreBtn({ onLoadMore, disabled }: LoadMoreBtnProps) {
  return (
    <button
      onClick={onLoadMore}
      disabled={disabled}
      type="button"
      className={css.loadMoreBtn}
    >
      Load More
    </button>
  );
}

export default LoadMoreBtn;
