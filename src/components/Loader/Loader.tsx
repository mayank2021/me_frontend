import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader1">
      <div className="page-wrapper">
        <div className="loader">
          <div className="jelly">
            <div className="body"></div>
            <div className="eye"></div>
            <div className="eye"></div>
            <div className="mouth"></div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
      Loading...
    </div>
  );
};

export default Loader;
