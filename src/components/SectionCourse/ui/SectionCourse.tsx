import cls from './SectionCourse.module.scss';
import course_img_1 from 'shared/assets/images/course-1.jpg';
import course_img_2 from 'shared/assets/images/course-2.jpg';

export const SectionCourse = () => {
	return (
		<section id='sectionCourse' className={cls.sectionCourse}>
			<div className={cls.inner}>
				<div className={cls.descr}>
					<h2 className={cls.title}>
						Наши курсы
					</h2>
					<p className={cls.descr_text}>
						Наши курсы позволяют сделать первый шаг в новой карьере или углубить знания в своей области,
						развиваться как профессионал, а также улучшить качество своей жизни.
					</p>
				</div>

				<div className={cls.content}>
					<div className={cls.content_item}>
						<div className={cls.content_item_img_wrapper}>
							<img className={cls.content_item_img} src={course_img_1} alt="Курс 1" />
							<p className={`${cls.content_item_img_title} ${cls.content_item_img_text}`}>
								Основы изготовления свечей
							</p>
							<p className={`${cls.content_item_img_time} ${cls.content_item_img_text}`}>
								Обучение-20 ч
							</p>
							<p className={`${cls.content_item_img_price} ${cls.content_item_img_text}`}>
								Цена-40$
							</p>
						</div>
						<h4 className={cls.content_item_title}>
							Основы изготовления свечей
						</h4>
						<p className={cls.content_item_text}>
							Будем обучать основам изготовления свечей из разных материалов.
						</p>
						<button className={cls.content_item_button}>
							Купить курс
						</button>
					</div>

					<div className={cls.content_item}>
						<div className={cls.content_item_img_wrapper}>
							<img className={cls.content_item_img} src={course_img_2} alt="Курс 2" />
							<p className={`${cls.content_item_img_title} ${cls.content_item_img_text}`}>
								Искусство ароматерапии
							</p>
							<p className={`${cls.content_item_img_time} ${cls.content_item_img_text}`}>
								Обучение-20 ч
							</p>
							<p className={`${cls.content_item_img_price} ${cls.content_item_img_text}`}>
								Цена-40$
							</p>
						</div>
						<h4 className={cls.content_item_title}>
							Искусство ароматерапии
						</h4>
						<p className={cls.content_item_text}>
							Будем изучать искусство ароматерапии и изготовления свечей с различными ароматами.
						</p>
						<button className={cls.content_item_button}>
							Купить курс
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};