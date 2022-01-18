import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import NewPost from "./components/NewPost";

function App() {
  const [file, setFile] = useState();

  const [image, setImage] = useState();

  useEffect(() => {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height,
        });
      };
    };
    file && getImage();
  }, [file]);
  console.log(image);
  return (
    <div>
      <Navbar />
      {image ? (
        <NewPost image={image} />
      ) : (
        <div className="newPostCard">
          <div className="addPost">
            <img
              src="https://images.unsplash.com/photo-1640782250352-d758cae39813"
              alt="add post"
              className="avatar"
            />
            <div className="postForm">
              <input
                type="text"
                placeholder="What's on your mind?"
                className="postInput"
              />
              <label htmlFor="file">
                <img
                  style={{ height: "30px" }}
                  src="https://cdn.icon-icons.com/icons2/564/PNG/512/Add_Image_icon-icons.com_54218.png"
                  alt="upload img"
                  className="addImg"
                />
                <img
                  style={{ height: "30px" }}
                  src="https://icon-library.com/images/maps-icon-png/maps-icon-png-5.jpg"
                  alt="upload img"
                  className="addImg"
                />
                <img
                  style={{ height: "30px" }}
                  src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
                  alt="upload img"
                  className="addImg"
                />
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                style={{ display: "none" }}
                type="file"
              />
              <button>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
