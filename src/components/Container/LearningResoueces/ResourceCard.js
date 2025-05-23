import "./learningresources.css";

const ResourceCard = ({ icon, title, description, links }) => {
  return (
    <div className="card">
      <h2 className="card-title">
        <span className="card-icon">{icon}</span> {title}
      </h2>
      <p className="card-description">{description}</p>
      <ul className="card-links">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceCard;
