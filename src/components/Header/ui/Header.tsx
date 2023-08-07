import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import logo from 'shared/assets/images/logo.png';
import Phone from 'shared/assets/icons/phone.svg';
import { useState } from 'react';

interface HeaderProps {
	className?: string
}

export const Header = ({ className }: HeaderProps) => {

	const [openMenu, setOpenMenu] = useState(false);

	const contentClassName = openMenu
		? cls.menu_list + " " + cls.menu_open
		: cls.menu_list;

	return (
		<header className={classNames(cls.header, {}, [className])}>
			<div className={classNames(cls.header_inner, {}, ['container'])}>
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
						<li className={cls.menu_list_item}><a href="#">О нас</a></li>
						<li className={cls.menu_list_item}><a href="#">Каталог</a></li>
						<li className={cls.menu_list_item}><a href="#">Команда</a></li>
						<li className={cls.menu_list_item}><a href="#">Отзывы</a></li>
						<li className={cls.menu_list_item}><a href="#">Курси</a></li>
						<li className={cls.menu_list_item}><a href="#">Контакти</a></li>
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