import { Link } from "react-router-dom";
import "./gallery.css";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="gallery"
      style={{ backgroundColor: "white", width: "100%", height: 670 }}
    >
      <div>
        <h1>Gallery</h1>
      </div>
      <div className="gallery-grid">
        <Link to="/gallery1" className="gallery-item">
          <img src="/path/to/image1.jpg" alt="Gallery 1" />
          <div className="gallery-label">Quốc Ngữ</div>
        </Link>
        <Link to="/gallery2" className="gallery-item">
          <img src="/path/to/image2.jpg" alt="Gallery 2" />
          <div className="gallery-label">Hán Nôm</div>
        </Link>
        <Link to="/gallery3" className="gallery-item">
          <img src="/path/to/image3.jpg" alt="Gallery 3" />
          <div className="gallery-label">Chữ Triệu ( Triệu Thư )</div>
        </Link>
        <Link to="/gallery4" className="gallery-item">
          <img src="/path/to/image4.jpg" alt="Gallery 4" />
          <div className="gallery-label">Chữ Lệ ( Lệ Thư )</div>
        </Link>
        <Link to="/gallery5" className="gallery-item">
          <img src="/path/to/image5.jpg" alt="Gallery 5" />
          <div className="gallery-label">Chữ Hành ( Hành Thư )</div>
        </Link>
        <Link to="/gallery6" className="gallery-item">
          <img src="/path/to/image6.jpg" alt="Gallery 6" />
          <div className="gallery-label">Chữ Khải ( Khải Thư )</div>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;