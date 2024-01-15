import Profile from './Profil/Profil';
import user from './User/user.json';

import Statistics from './Statistics/Statistics';
import data from './User/data.json';

import FriendList from './Friends/Friends';
import friends from './User/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './User/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendsLi={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
