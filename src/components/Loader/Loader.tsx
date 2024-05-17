import { ReactElement } from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = (): ReactElement => {
  return (
    <RotatingLines
      visible={true}
      width="96"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  );
};

export default Loader;
