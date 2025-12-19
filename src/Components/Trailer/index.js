import "./index.css";

const Trailer = (props) => {
  const { trailerUrl } = props;

  return (
    <div className="video-container">
      <iframe
        className="video"
        width="560"
        height="315"
        src={trailerUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Trailer;
