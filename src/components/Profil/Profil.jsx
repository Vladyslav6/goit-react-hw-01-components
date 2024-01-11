// import styled from 'styled-components';
// import UserName from '../user/user.json';
import './Profil.css';
// export const Divin = styled.p`
//   background-color: #518080;
// `;

const Profile = props => {
  return (
    <div className="profile">
      <div className="description">
        <img src={props.avatar} alt="User avatar" className="avatar" />
        <p className="name">{props.username}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {props.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity"> {props.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity"> {props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
