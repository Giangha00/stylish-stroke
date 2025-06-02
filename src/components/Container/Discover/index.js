import "./discover.css";

const Discover = () => {
  const cards = [
    {
      id: 1,
      image: "link_anh_1",
    },
    {
      id: 2,
      image: "link_anh_2.jpg",
    },
    {
      id: 3,
      image: "link_anh_3.jpg",
    },
    {
      id: 4,
      image: "link_anh_4.jpg",
    },
    {
      id: 5,
      image: "link_anh_5.jpg",
    },
    {
      id: 6,
      image: "link_anh_6.jpg",
    },
  ];

  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
    <div className="discover">
      <div className="discover-content">
        <h1 className="discover-title">Discover the Art of Calligraphy</h1>
        <p className="discover-p">
          Elegance • Lettering • Expression • Tradition • Modernity
        </p>
        <div className="discover-button">
          <button className="button">Arabic</button>
          <button className="button">Western</button>
          <button className="button">Oriental</button>
          <button className="button">Brush</button>
          <button className="button">Copperplate</button>
        </div>
        <div className="card-container">
          <div className="scroll-content">
            {duplicatedCards.map((card, index) => (
              <div className="card" key={`${card.id}-${index}`}>
                <img src={card.image} alt={`Card ${card.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
