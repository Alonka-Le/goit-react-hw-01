import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.userInfo}>
        <img src={image} alt="User avatar" className={css.userImg} />
        <p className={css.userName}>{name}</p>
        <p className={css.userTagLocation}>@{tag}</p>
        <p className={css.userTagLocation}>{location}</p>
      </div>
      <ul className={css.statusList}>
        <li className={css.statusItem}>
          <span className={css.statusInfo}>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li className={css.statusItem}>
          <span className={css.statusInfo}>Views</span>
          <span>{stats.views}</span>
        </li>

        <li className={css.statusItem}>
          <span className={css.statusInfo}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
