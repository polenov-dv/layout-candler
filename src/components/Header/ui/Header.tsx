import cls from './Header.module.scss';
import logo from 'shared/assets/images/logo.png';
import Phone from 'shared/assets/icons/phone.svg';
import { useState } from 'react';

export const Header = () => {

	const [openMenu, setOpenMenu] = useState(false);

	const contentClassName = openMenu
		? cls.menu_list + " " + cls.menu_open
		: cls.menu_list;

	return (
		<header className={cls.header}>
			<div className={cls.header_inner}>
				<a href="#" className={cls.logo}>
					<img src={logo} alt="Логотип" />
				</a>
				<nav className={cls.menu}>
					<button onClick={() => setOpenMenu(!openMenu)} className={cls.menu_btn}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<ul className={contentClassName}>
						<li className={cls.menu_list_item}><a href="#sectionAboutUs">О нас</a></li>
						<li className={cls.menu_list_item}><a href="#sectionProducts">Каталог</a></li>
						<li className={cls.menu_list_item}><a href="#sectionTeam">Команда</a></li>
						<li className={cls.menu_list_item}><a href="#sectionComments">Отзывы</a></li>
						<li className={cls.menu_list_item}><a href="#sectionCourse">Курси</a></li>
						<li className={cls.menu_list_item}><a href="#sectionContacts">Контакти</a></li>
					</ul>
				</nav>
				<a className={cls.phone} href="tel:+79029999999" >
					<Phone className={cls.phone_svg} />
					+7 902 999 9999
				</a>
			</div>
		</header>
	);
};