import "./Authentication.css";
const Profile = () => {
  return (
    <div className="profile-page">
      <p className="typo-title flex-hz-center p-2">My Profile</p>
      <div className="flex-hz-center">
        <button className="btn btn-outlined">Sign Out</button>
      </div>
    </div>
  );
};

export { Profile };
