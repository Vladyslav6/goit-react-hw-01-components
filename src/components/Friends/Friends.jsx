import Styles from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './friedsListItem';

const FriendList = ({ friendsLi }) => {
  return (
    <ul className={Styles.friendList}>
      {friendsLi.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friendsLi: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;

// FriendList.propTypes ={
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }
//   )
// }

// const FriendList = ({ friendsLi }) => {
//   const FriendMap = friendsLi.map(item => (
//     <li className={Styles.item} key={item.id}>
//       <span className={Styles.status}>
//         {item.isOnline === true ? (
//           <div className={Styles.coloOnline}></div>
//         ) : (
//           <div className={Styles.coloOffline}></div>
//         )}
//       </span>
//       <img
//         className={Styles.avatar}
//         src={item.avatar}
//         alt="User avatar"
//         width="48"
//       />
//       <p className={Styles.name}>{item.name}</p>
//     </li>
//   ));
//   return <ul className={Styles.friendList}>{FriendMap}</ul>;
// };
