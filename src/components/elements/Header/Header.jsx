import Search from '../../UI/Search/Search';
import styles from './Header.module.scss';
import  Profile  from "./Profile";
import logo from '../../../images/netflix.png'

const Header = () => {
	return (
		<div className={styles.header}>
			<div>
				<a href='/'>
					<img
						src={logo}
						alt='Netflix'
						height='35'
						width='112'
					/>
				</a>
				<Search />
			</div>
			<Profile />
		</div>
	)
}
export default Header