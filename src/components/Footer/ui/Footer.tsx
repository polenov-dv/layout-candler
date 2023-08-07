import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Footer.module.scss';
import logo from 'shared/assets/images/logo.png'
import Facebook from 'shared/assets/icons/facebook.svg';
import Instagram from 'shared/assets/icons/instagram.svg';
import Linkedin from 'shared/assets/icons/linkedin.svg';
import Youtube from 'shared/assets/icons/youtube.svg';

import Logo from 'shared/assets/icons/logo.svg';

interface FooterProps {
	className?: string
}

export const Footer = ({ className }: FooterProps) => {
	return (
		<footer className={classNames(cls.footer, {}, [className])}>
			<div className={classNames(cls.footer_inner, {}, ['container'])}>
				<a href="#" className={cls.logo}>
					<img src={logo} alt="Логотип" />
				</a>
				<nav className={cls.menu}>
					<ul className={cls.menu_list}>
						<li className={cls.menu_list_item}><a href="#">О нас</a></li>
						<li className={cls.menu_list_item}><a href="#">Каталог</a></li>
						<li className={cls.menu_list_item}><a href="#">Команда</a></li>
						<li className={cls.menu_list_item}><a href="#">Отзывы</a></li>
						<li className={cls.menu_list_item}><a href="#">Курси</a></li>
						<li className={cls.menu_list_item}><a href="#">Контакти</a></li>
					</ul>
				</nav>

				<div className={cls.contacts}>
					<a className={cls.phone} href="tel:+79029999999" >+7 902 999 9999</a>
					<a className={cls.email} href="mailto:layout_candler@gmail.com" >layout_candler@gmail.com</a>
					<ul className={cls.social}>
						<li className={cls.social_item}>
							<a className={cls.social_item_link} href="#">
								<Facebook />
							</a>
						</li>
						<li className={cls.social_item}>
							<a className={cls.social_item_link} href="#">
								<Instagram />
							</a>
						</li>
						<li className={cls.social_item}>
							<a className={cls.social_item_link} href="#"><img src="" alt="" />
								<Linkedin />
							</a>
						</li>
						<li className={cls.social_item}>
							<a className={cls.social_item_link} href="#"><img src="" alt="" />
								<Youtube />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};