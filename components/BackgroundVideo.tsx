export function BackgroundVideo() {
  return (
    <video
      aria-hidden="true"
      autoPlay
      className="background-video"
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src="/videos/basilica-background.mp4" type="video/mp4" />
    </video>
  );
}
