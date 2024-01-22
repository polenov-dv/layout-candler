import cls from './SectionAboutUs.module.scss';
import about_img_1 from 'shared/assets/images/about-1.jpg';
import about_img_2 from 'shared/assets/images/about-2.png';
import about_img_3 from 'shared/assets/images/about-3.jpg';

export const SectionAboutUs = () => {
	return (
		<section id='sectionAboutUs' className={cls.sectionAboutUs}>
			<div className={cls.inner}>
				<div className={cls.content}>
					<h2 className={cls.title}>
						О нас
					</h2>
					<p className={`${cls.text} ${cls.text_1}`}>
						Богдан создатель бренда который всегда заинтересован в изготовлении разнообразных
						вещей дома. Он регулярно экспериментировал с различными материалами и инструментами,
						пробуя свои силы во многих областях, включая изготовление свечей.
					</p>
					<p className={cls.text}>
						Сосновый воск производится из соевых бобов, сращиваемых в Дании, и этот вид воска
						является экологически чистым и безопасным для здоровья.
					</p>
				</div>

				<ul className={cls.list}>
					<li className={cls.list_item}>
						<img className={`${cls.list_item_img} ${cls.list_item_img_1}`} src={about_img_1} alt="Наслаждайтесь моментом" />
						<p className={cls.list_item_text}>
							Наслаждайтесь моментом
						</p>
					</li>
					<li className={cls.list_item}>
						<img className={`${cls.list_item_img} ${cls.list_item_img_2}`} src={about_img_2} alt="Создайте любимую атмосферу" />
						<p className={cls.list_item_text}>
							Создайте любимую атмосферу
						</p>
					</li>
					<li className={cls.list_item}>
						<img className={`${cls.list_item_img} ${cls.list_item_img_3}`} src={about_img_3} alt="Изготовлены с любовью" />
						<p className={cls.list_item_text}>
							Изготовлены с любовью
						</p>
					</li>
				</ul>
			</div>
		</section >
	);
};