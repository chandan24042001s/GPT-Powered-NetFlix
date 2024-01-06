import ReactPlayer from "react-player";
import useSelectedVideo from "../hooks/useSelectedVideo";
import { useSelector } from "react-redux";

const SelectedVideo = ({ movieId, setIsSelected }) => {
  useSelectedVideo(movieId);
  const trailerVideo = useSelector((store) => store.movies.selectedVideo);
    console.log(movieId)
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center z-50 w-screen h-screen aspect-video">
      <div
        onClick={() => setIsSelected(false)}
        className="bg-black opacity-85 absolute h-full w-full -z-10 top-0 left-0"
      ></div>
      <ReactPlayer
        playing={true}
        controls={true}
        height={"90vh"}
        width={"80vw"}
        url={"https://www.youtube.com/watch?v=" + trailerVideo?.key}
      />
    </div>
  );
};

export default SelectedVideo;