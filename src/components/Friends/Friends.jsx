import './Friends.css';

const FriendList = ({ friendsLi }) => {
  const FriendMap = friendsLi.map(item => (
    <li className="item" key={item.id}>
      <span className="status">{item.isOnline === true ? 'tru' : 'fals'}</span>
      <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
      <p className="name">{item.name}</p>
    </li>
  ));
  return <ul className="friend-list">{FriendMap}</ul>;
};

export default FriendList;
