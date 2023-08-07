import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SectionComments.module.scss';
import product_img_1 from 'shared/assets/images/product-1.jpg';
import product_img_2 from 'shared/assets/images/product-2.jpg';
import product_img_3 from 'shared/assets/images/product-3.jpg';
import product_img_4 from 'shared/assets/images/product-4.jpg';
import button_img from 'shared/assets/images/button.png';

import Instagram from 'shared/assets/icons/instagram.svg';
import { useEffect, useState } from 'react';

interface SectionCommentsProps {
	className?: string
}

export const SectionComments = ({ className }: SectionCommentsProps) => {

	const [activeSlide, setActiveSlide] = useState(1);

	useEffect(() => {
		let slides = document.getElementsByClassName(cls.slider_item) as HTMLCollectionOf<HTMLElement>;
		let dots = document.getElementsByClassName(cls.slider_nav_item) as HTMLCollectionOf<HTMLElement>;

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (let i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(` ${cls.active}`, "");
		}
		slides[activeSlide - 1].style.display = "grid";
		dots[activeSlide - 1].className += ` ${cls.active}`;
	}, [activeSlide]);

	return (
		<section className={classNames(cls.sectionComments, {}, [className])}>
			<div className={classNames(cls.inner, {}, ['container'])}>
				<div className={cls.descr}>
					<h2 className={cls.title}>
						Отзывы от клиентов
					</h2>
					<p className={cls.descr_text}>
						Наши покупатели имеют разный возраст, статус, занятия и интересы,
						но у них есть одна общая черта - они стремятся к гармонии и находят
						радость в маленьких радостях жизни, которые создают атмосферу уюта и гармонии в их доме.
					</p>
				</div>

				<div className={cls.content}>
					<div className={cls.slider}>
						<div className={`${cls.slider_item} ${cls.fade}`}>
							<div className={cls.slider_item_video}>
								<img className={cls.slider_item_img} src={product_img_1} alt="Продукт 1" />
								<button className={cls.slider_item_btn}>
									<img src={button_img} alt="Кнопка <Воспроизвести>" />
								</button>
							</div>

							<div className={cls.slider_item_about}>
								<a className={cls.slider_item_sociallink} href="#">
									<Instagram />
								</a>
								<p className={cls.slider_item_name}>
									Иван Пилипенко
								</p>
								<p className={cls.slider_item_text}>
									Я заказал свечу в форме сердечка на День Святого Валентина для моей девушки и она была просто невероятна!
									Запах был очень приятным и романтичным, а форма сердечка была совершенной для этого праздника.
								</p>
								<button className={cls.slider_item_button}>
									Купить этот товар
								</button>
							</div>
						</div>

						<div className={`${cls.slider_item} ${cls.fade}`}>
							<div className={cls.slider_item_video}>
								<img className={cls.slider_item_img} src={product_img_2} alt="Продукт 2" />
								<button className={cls.slider_item_btn}>
									<img src={button_img} alt="Кнопка <Воспроизвести>" />
								</button>
							</div>

							<div className={cls.slider_item_about}>
								<a className={cls.slider_item_sociallink} href="#">
									<Instagram />
								</a>
								<p className={cls.slider_item_name}>
									Василий Зайцев
								</p>
								<p className={cls.slider_item_text}>
									Эту свечку я купила офлайн магазине, мне понравился яркий аромат тропических цветов,
									как в спа салоне на Бали. Но как только я ее зажгла, она тут же перестала пахнуть вообще.
								</p>
								<button className={cls.slider_item_button}>
									Купить этот товар
								</button>
							</div>
						</div>

						<div className={`${cls.slider_item} ${cls.fade}`}>
							<div className={cls.slider_item_video}>
								<img className={cls.slider_item_img} src={product_img_3} alt="Продукт 3" />
								<button className={cls.slider_item_btn}>
									<img src={button_img} alt="Кнопка <Воспроизвести>" />
								</button>
							</div>

							<div className={cls.slider_item_about}>
								<a className={cls.slider_item_sociallink} href="#">
									<Instagram />
								</a>
								<p className={cls.slider_item_name}>
									Анна Дарк
								</p>
								<p className={cls.slider_item_text}>
									Аромат появляется где-то спустя десять минут горения и достаточно яркий,
									но при этом не душит. Я жгу свечу около часа. Этого времени мне хватает чтобы насладиться ароматом,
									поднять себе настроение и при этом не устать от него.
								</p>
								<button className={cls.slider_item_button}>
									Купить этот товар
								</button>
							</div>
						</div>

						<div className={`${cls.slider_item} ${cls.fade}`}>
							<div className={cls.slider_item_video}>
								<img className={cls.slider_item_img} src={product_img_4} alt="Продукт 4" />
								<button className={cls.slider_item_btn}>
									<img src={button_img} alt="Кнопка <Воспроизвести>" />
								</button>
							</div>

							<div className={cls.slider_item_about}>
								<a className={cls.slider_item_sociallink} href="#">
									<Instagram />
								</a>
								<p className={cls.slider_item_name}>
									Игнат Великий
								</p>
								<p className={cls.slider_item_text}>
									Запах сандала - это конечно, не запах роз, и на любителя, так скажем, но в целом, мне он нравится,
									и у меня были духи, масла и свечи с сандалом.
								</p>
								<button className={cls.slider_item_button}>
									Купить этот товар
								</button>
							</div>
						</div>

						<div className={cls.slider_nav}>
							<span className={cls.slider_nav_item} onClick={() => setActiveSlide(1)}></span>
							<span className={cls.slider_nav_item} onClick={() => setActiveSlide(2)}></span>
							<span className={cls.slider_nav_item} onClick={() => setActiveSlide(3)}></span>
							<span className={cls.slider_nav_item} onClick={() => setActiveSlide(4)}></span>
						</div>
					</div>
				</div>
			</div>
		</section >
	);
};