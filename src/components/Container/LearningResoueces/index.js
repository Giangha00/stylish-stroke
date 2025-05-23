import "../LearningResoueces/learningresources.css";
import ResourceCard from "./ResourceCard";
import { FaChalkboardTeacher, FaPenNib, FaAppleAlt } from "react-icons/fa";
// import { DiIllustrator } from "react-icons/di";

const LearningResources = () => {
  <section
    id="learning-resources"
    className="learning-resources"
    style={{ backgroundColor: "yellow", width: "100%", height: 670 }}
  ></section>;
  const resources = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Triện thư - Seal Script",
      description:
        "Triện thư, hay chữ triện, là một kiểu chữ thư pháp Trung Quốc cổ. Đây là loại chữ tượng hình có nguồn gốc từ chữ giáp cốt thời nhà Thương và phát triển thành Kim văn nhà Chu sau đó phát triển thành chữ Triện ở nước Tần trong thời kì Chiến quốc.",
      links: [
        "Nét uốn cong, mềm mại nhưng rất đều.",
        "Dạng chữ như 'con dấu'.",
        "Thể hiện tính trang trọng, cổ kính.",
      ],
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Lệ thư - Clerical Script",
      description:
        "Đây là loại chữ giản lược từ triện thư, gần với chữ viết Trung Quốc hiện đại. Lệ thư xuất hiện từ thời Chiến quốc nhưng do lựa chọn của Tần Thủy Hoàng, triện thư đã được sử dụng chính thức trong thời gian dài trước khi bị lệ thư thay thế vì tính đơn giản hữu ích của nó.",
      links: [
        "Nét chữ dẹp ngang như quạt, 'tằm đầu nhạn vĩ' (đầu tròn đuôi nhọn)",
        "Mang tính ổn định, nghiêm trang, cổ điển.",
        "Dễ đọc hơn triện thư.",
      ],
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Khải thư - Regular Script",
      description:
        "Khải thư hoặc chữ Khải, còn gọi là chân thư , chính khải , khải thể , và chính thư, là lối chữ viết Hán đặc biệt được chuẩn hóa, với các nét chữ được tách biệt, không liên kết với nhau trong một khuôn vuông",
      links: [
        "Rõ ràng, vuông vắn, dễ đọc và dễ viết.",
        "Chuẩn mực nhất trong thư pháp.",
        "Các nét được viết tỉ mỉ, có thứ tự rõ ràng.",
      ],
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Hành thư - Running Script",
      description:
        "là một phong cách viết chữ Hán bắt nguồn từ thảo thư. Tuy nhiên, vì nó không quá tháu như thảo thư cho nên dễ đọc hơn, và hầu hết những người đọc được khải thư cũng đều có thể đọc được hành thư.",
      links: [
        "Nửa cứng cáp, nửa phóng khoáng.",
        "Chữ viết liền, nhưng vẫn rõ ràng.",
        "Mang tính linh hoạt, bay bổng.",
      ],
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Thảo thư - Cursive Script",
      description:
        " chữ thảo là một kiểu viết chữ Hán của thư pháp Trung Hoa. So với triện thư, lệ thư, khải thư và hành thư, thảo thư có bút pháp phóng khoáng và tốc độ viết chữ nhanh hơn cả.",
      links: [
        "Nét phóng túng, viết nhanh như “chữ thảo”.",
        "Có thể khó đọc với người không quen.",
        "Chữ có thể nối nhau hoặc viết giản lược.",
      ],
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Hành - thảo thư",
      description:
        "Không phải thể độc lập cổ điển, nhưng được nhiều thư pháp gia sử dụng,Nét chữ vừa rõ ràng (như hành thư), vừa mềm mại, nhanh gọn (như thảo thư).",
      links: [
        "Là kiểu kết hợp giữa Hành thư và Thảo thư.",
        "Sáng tác thư pháp cá nhân",
        "Tạo sự tươi mới , sáng tạo.",
      ],
    },
  ];

  return (
    <div className="learning-container">
      <h1 className="title">Tư liệu học tập</h1>
      <div className="cards-wrapper">
        {resources.map((item, index) => (
          <ResourceCard key={index} {...item} />
        ))}
      </div>
      <div className="footer-button">
        <button>
          {/* <FaAppleAlt /> */}
          Procreate
        </button>
        <button>
          {/* <DiIllustrator /> */}
          Illustrator
        </button>
        <button>
          {/* <FaPenNib /> */}
          Calligraphr
        </button>
      </div>
    </div>
  );
};

export default LearningResources;
