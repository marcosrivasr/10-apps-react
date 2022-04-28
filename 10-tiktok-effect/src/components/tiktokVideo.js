export default function TiktokVideo({ item }) {
  return (
    <div className="tiktokVideo">
      <video width="540" height="960" controls>
        <source
          src={`http://localhost:4000/videos/${item.src}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
