import React, { useState } from 'react';
import './Calligraphy.css';

const cardData = [
  { id: 1, title: 'Lịch sử', content: 'Calligraphy bắt nguồn từ nền văn hóa cổ đại và phát triển qua nhiều thời kỳ.' },
  { id: 2, title: 'Công cụ', content: 'Bút lông, mực tàu, giấy dó là những công cụ phổ biến.' },
  { id: 3, title: 'Phong cách', content: 'Có nhiều phong cách khác nhau như Gothic, Italic, Modern,...' },
  { id: 4, title: 'Ứng dụng', content: 'Calligraphy được ứng dụng trong thiết kế, thư mời, tranh nghệ thuật,...' },
  { id: 5, title: 'Thư pháp Á Đông', content: 'Thư pháp Hán Nôm mang giá trị văn hóa tinh thần đặc biệt.' },
  { id: 6, title: 'Thư pháp Latin', content: 'Thư pháp Latin phổ biến ở phương Tây và có tính trang trí cao.' },
  { id: 7, title: 'Kỹ thuật nâng cao', content: 'Kỹ thuật shading, pressure control được áp dụng để tăng độ tinh tế.' },
];

const Calligraphy = () => {
  const [selectedCard, setSelectedCard] = useState(cardData[0]);

  return (
    <div className="calligraphy-container">
      <div className="calligraphy-left">
        <h2>{selectedCard.title}</h2>
        <p>{selectedCard.content}</p>
      </div>
      <div className="calligraphy-right">
        <div className="card-scroll">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`card ${selectedCard.id === card.id ? 'active' : ''}`}
              onClick={() => setSelectedCard(card)}
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calligraphy;
