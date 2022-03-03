// UI component for user profile
export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <img src={user.photoURL || 'https://extensionentomology.tamu.edu/files/2021/02/Danaidae_Monarch_John_Jackman-M.jpg'} className="card-img-center" />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || 'Anonymous User'}</h1>
    </div>
  );
}