// Import cần thiết
import React, { useState, useRef, useEffect } from "react";
import "./calligraphy.css";

const calligraphyData = [
  {
    title: "Thư pháp chữ Quốc ngữ",
    description: `
- Xuất hiện từ đầu thế kỷ XX, khi chữ Quốc Ngữ dần thay thế chữ Hán - Nôm
- Ban đầu chưa được chú ý nhiều vì thư pháp truyền thống gắn với chữ tượng hình
- Phát triển mạnh do nhu cầu thể hiện cái đẹp qua ngôn ngữ mẹ đẻ ngày càng lớn`,
  },
  {
    title: "Thư pháp chữ Hán – Nôm",
    description: `
- Thư pháp chữ Hán - Nôm ở Việt Nam có lịch sử lâu đời, bắt nguồn từ thời Đông Châu Liệt Quốc với các thể kim văn, triện văn
- Chữ Hán được sử dụng tại Việt Nam ít nhất từ 2000 năm trước và được các triều đại coi là ngôn ngữ hành chính nhà nước
- Đến thời Nguyễn, triều đình Việt Nam còn tự nhận là chủ thể kế thừa văn hóa, ngôn ngữ Hán chính thống
`,
  },
  {
    title: "Chữ Hành (行書 / Xíngshū)",
    description: `
- Xuất hiện vào khoảng thế kỷ 2 TCN trong thời nhà Hán
- Được thiết lập bởi Lưu Đức Thăng (劉德昇)
- Phát triển từ việc đơn giản hóa và giảm bớt các nét uốn lượn trong chữ Lệ Hán (漢隸)
`,
  },
  {
    title: "Chữ Khải (楷書 / Kǎishū)",
    description: `
- Xuất hiện vào khoảng thế kỷ thứ 2-3 sau Công nguyên, trong thời kỳ Tam Quốc
- Được hoàn thiện và phát triển mạnh vào thời nhà Đường (618-907)
- Được cho là do Wang Cizhong sáng tạo và Zhong Yao (151-230) chuẩn hóa
`,
  },
  {
    title: "Chữ Lệ (隸書 / Lìshū)",
    description: `
- Xuất hiện vào cuối thời Chiến Quốc và phát triển mạnh trong thời Tần-Hán
- Ban đầu được sử dụng bởi các quan lại cấp thấp để viết công văn hành chính
- Đến thời Hán trở thành thể chữ chính thống được sử dụng rộng rãi
`,
  },
  {
    title: "Chữ Triện (篆書 / Zhuànshū)",
    description: `
- Chữ Triện là một trong những thể loại chữ cổ nhất của Trung Quốc
- Được chia làm 2 loại chính:
  + Đại Triện (大篆): Thời kỳ trước nhà Tần
  + Tiểu Triện (小篆): Do Lý Tư thống nhất và chuẩn hóa dưới thời Tần Thủy Hoàng
`,
  },
];

export default function Calligraphy() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const scrollToSection = () => {
      if (window.location.hash === "#about-calligraphy") {
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    };

    // Scroll when component mounts if hash exists
    scrollToSection();

    // Add listener for hash changes
    window.addEventListener("hashchange", scrollToSection);

    // Cleanup
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);

  const handleKeyPress = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <section
        id="about-calligraphy"
        ref={sectionRef}
        className="calligraphy-section"
      >
        <h2 className="section-title">About Calligraphy</h2>
        <div className="calligraphy-content">
          {/* Nội dung bên trái */}
          <div className="calligraphy-text">
            <h3 className="highlight">Origins & History</h3>
            <p>{calligraphyData[selectedIndex]?.description}</p>
          </div>

          {/* Danh sách ô bên phải */}
          <div className="calligraphy-boxes" role="list">
            {calligraphyData.map((item, index) => (
              <div
                key={index}
                className={`calligraphy-box ${
                  index === selectedIndex ? "active" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                role="listitem"
                tabIndex={0}
                aria-selected={index === selectedIndex}
              >
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
