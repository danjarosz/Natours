import classes from "./BackgroundVideo.module.scss";

const BackgroundVideo = () => {
  return (
    <div className={classes["bg-video"]}>
      <video className={classes["bg-video__content"]} autoPlay muted loop>
        <source src="/images/video.mp4" type="video/mp4" />
        <source src="/images/video.webm" type="video/webm" />
        Your broweser is not supported!
      </video>
    </div>
  );
};

export default BackgroundVideo;
