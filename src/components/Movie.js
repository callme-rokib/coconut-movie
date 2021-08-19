const DEFAULT_IMAGE_NOTFOUND =
  'http://sauyunan.tasikmalayakab.go.id/front/img/no_image.jpg';

const Movie = ({ movie }) => {
  const poster = movie.Poster === 'N/A' ? DEFAULT_IMAGE_NOTFOUND : movie.Poster;
  return (
    <div className="col">
      <div
        className="my-card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        style={{
          backgroundImage: `url(${poster})`,
        }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-5 text-white text-shadow-1">
          <h2 className="pt-5 mt-5 mb-5 display-1 fw-bold">{movie.Year}</h2>
        </div>
        <div className="bg-primary bg-gradient text-white text-center fw-bold fs-3">
          {movie.Title}
        </div>
      </div>
    </div>
  );
};

export default Movie;
