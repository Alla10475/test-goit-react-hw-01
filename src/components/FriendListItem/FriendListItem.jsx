import css from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline = 'false' }) => {
  return (
    <div className={css.friendItem}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
          <p className={isOnline ? css.statusOffline : css.statusOnline}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
