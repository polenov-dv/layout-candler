import cls from './SectionTop.module.scss';
import top_img_l from 'shared/assets/images/top-l.png';
import top_img_m from 'shared/assets/images/top-m.png';
import top_img_c from 'shared/assets/images/top-c.png';

export const SectionTop = () => {
	return (
		<section className={cls.sectionTop}>
			<div className={cls.inner}>
				<div className={cls.content}>
					<h3 className={cls.title}>
						Создайте атмосферу уюта и гармонии!
					</h3>
					<p className={cls.text}>
						Создайте особую атмосферу в своем доме с нашей экологически чистой и качественной
						продукцией из 100% натурального соевого воска.
					</p>
					<button className={cls.buy}>
						Купить
					</button>
				</div>
				<picture className={cls.top_img}>
					<source srcSet={top_img_c} media="(max-width:360px)" />
					<source srcSet={top_img_m} media="(max-width:480px)" />
					<img className={cls.img_active} src={top_img_l} alt="Гармония" />
				</picture>
			</div>
		</section>
	);
};