import styles from "./Header.module.scss";
import avatar from "../../../images/avatar.avif";

const Profile = () => {
	return (
		<div className={styles["profile-wrapper"]}>
			<div className={styles.notification}>
				<i className="bx bxs-bell"></i>
				<span></span>
			</div>
			<div className={styles.profile}>
				<div>
					<img
						src={avatar}
						alt="avatar"
					/>
				</div>
				<i className="bx bx-caret-down"></i>
			</div>
		</div>
	);
};

export default Profile;
