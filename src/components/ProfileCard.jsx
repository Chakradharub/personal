function ProfileCard({ name, image, onClick, isSelected }) {
  return (
    <button
      className={`profile-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={image} alt={name} />

      <div className="profile-card-overlay">
        <span>{name}</span>
      </div>
    </button>
  );
}

export default ProfileCard;
