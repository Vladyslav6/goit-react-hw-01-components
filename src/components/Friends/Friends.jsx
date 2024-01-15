import Styles from './Friends.module.css';

const FriendList = ({ friendsLi }) => {
  const FriendMap = friendsLi.map(item => (
    <li className={Styles.item} key={item.id}>
      <span className={Styles.status}>
        {item.isOnline === true ? (
          <div className={Styles.coloOnline}></div>
        ) : (
          <div className={Styles.coloOffline}></div>
        )}
      </span>
      <img
        className={Styles.avatar2}
        src={item.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={Styles.name}>{item.name}</p>
    </li>
  ));
  return <ul className={Styles.friendList}>{FriendMap}</ul>;
};

export default FriendList;
