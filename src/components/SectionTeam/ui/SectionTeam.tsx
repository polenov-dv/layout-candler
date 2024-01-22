import cls from './SectionTeam.module.scss';
import team_img_1 from 'shared/assets/images/team-1.jpg';
import team_img_2 from 'shared/assets/images/team-2.jpg';
import team_img_3 from 'shared/assets/images/team-3.jpg';
import team_img_4 from 'shared/assets/images/team-4.jpg';

export const SectionTeam = () => {
	return (
		<section id='sectionTeam' className={cls.sectionTeam}>
			<div className={cls.inner}>
				<div className={cls.descr}>
					<h2 className={cls.title}>
						Наши преподаватели
					</h2>
					<p className={cls.descr_text}>
						Эти люди работают вместе, чтобы создавать для вас курсы,
						которые помогут вам начать свой собственный бизнес или хобби.
					</p>
				</div>

				<div className={cls.content}>
					<div className={cls.content_item}>
						<img className={cls.content_item_img} src={team_img_1} alt="Первый участник" />
						<div className={cls.content_item_text}>
							<p className={cls.content_item_text_title}>
								Преподаватель Богдан
							</p>
							<p className={cls.content_item_text_about}>
								Имеет опыт преподавания и работы 4 года
							</p>
						</div>
					</div>

					<div className={cls.content_item}>
						<img className={cls.content_item_img} src={team_img_2} alt="Второй участник" />
						<div className={cls.content_item_text}>
							<p className={cls.content_item_text_title}>
								Преподаватель Анна
							</p>
							<p className={cls.content_item_text_about}>
								Имеет опыт преподавания и работы 6 лет
							</p>
						</div>
					</div>

					<div className={cls.content_item}>
						<img className={cls.content_item_img} src={team_img_3} alt="Третий участник" />
						<div className={cls.content_item_text}>
							<p className={cls.content_item_text_title}>
								Преподаватель Галина
							</p>
							<p className={cls.content_item_text_about}>
								Обучает сфере дизайна и декорирования
							</p>
						</div>
					</div>

					<div className={cls.content_item}>
						<img className={cls.content_item_img} src={team_img_4} alt="Четвертый участник" />
						<div className={cls.content_item_text}>
							<p className={cls.content_item_text_title}>
								Маркетолог Ольга
							</p>
							<p className={cls.content_item_text_about}>
								Поможет вам с рекламой
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};