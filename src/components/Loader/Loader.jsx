import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <PropagateLoader
      color="hsla(201, 83%, 56%, 1)"
      cssOverride={{}}
      loading
      size={20}
      speedMultiplier={1}
    />
  );
};

export default Loader;
