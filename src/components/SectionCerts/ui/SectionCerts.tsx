import { useEffect, useState } from 'react';
import cls from './SectionCerts.module.scss';
import cert_img_1 from 'shared/assets/images/cert-1.png';
import cert_img_2 from 'shared/assets/images/cert-2.png';
import cert_img_3 from 'shared/assets/images/cert-3.png';

export const SectionCerts = () => {

	const [activeSlide, setActiveSlide] = useState(1);

	useEffect(() => {
		let slides = document.getElementsByClassName(cls.slider_item) as HTMLCollectionOf<HTMLElement>;
		let dots = document.getElementsByClassName(cls.slider_nav_item) as HTMLCollectionOf<HTMLElement>;
		let statusActive = null;

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		for (let i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(` ${cls.active}`, "");
		}

		for (let i = 0; i < slides.length; i++) {

			if (i + 1 === activeSlide) {
				statusActive = i;
			}
			if (statusActive !== null) {
				slides[i].style.display = "block";
			}
		}

		dots[activeSlide - 1].className += ` ${cls.active}`;
	}, [activeSlide]);

	return (
		<section className={cls.sectionCerts}>
			<div className={cls.inner}>
				<div className={cls.descr}>
					<h2 className={cls.title}>
						Сертификаты качества
					</h2>
					<p className={cls.descr_text}>
						Сертификаты обеспечивают дополнительное доверие и уверенность для наших клиентов.
					</p>
				</div>

				<div className={cls.content}>
					<div className={cls.slider}>
						<div className={cls.slider_item}>
							<img src={cert_img_1} alt="Сертификат 1" />
						</div>
						<div className={cls.slider_item}>
							<img src={cert_img_2} alt="Сертификат 2" />
						</div>
						<div className={cls.slider_item}>
							<img src={cert_img_3} alt="Сертификат 3" />
						</div>
						<div className={cls.slider_item}>
							<img src={cert_img_1} alt="Сертификат 4" />
						</div>
						<div className={cls.slider_item}>
							<img src={cert_img_2} alt="Сертификат 5" />
						</div>
						<div className={cls.slider_item}>
							<img src={cert_img_3} alt="Сертификат 6" />
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
		</section>
	);
};