import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SectionSteps.module.scss';
import step_img_1 from "shared/assets/images/step-1.jpg";
import step_img_2 from "shared/assets/images/step-2.jpg";
import step_img_3 from "shared/assets/images/step-3.jpg";
import step_img_4 from "shared/assets/images/step-4.jpg";
import step_img_5 from "shared/assets/images/step-5.jpg";
import step_img_6 from "shared/assets/images/step-6.jpg";
import step_img_7 from "shared/assets/images/step-7.jpg";
import step_img_8 from "shared/assets/images/step-8.jpg";
import step_img_9 from "shared/assets/images/step-9.jpg";
import step_img_10 from "shared/assets/images/step-10.jpg";

interface SectionStepsProps {
	className?: string
}

export const SectionSteps = ({ className }: SectionStepsProps) => {
	return (
		<section className={classNames(cls.sectionSteps, {}, [className])}>
			<div className={classNames(cls.inner, {}, ['container'])}>
				<div className={cls.descr}>
					<h2 className={cls.title}>
						Этапы создания свечей
					</h2>
					<p className={cls.descr_text}>
						Создание свечи из соевого воска может состоять из следующих этапов:
					</p>
				</div>

				<ol className={cls.content}>
					<li className={cls.content_item + ' ' + cls.content_item_odd}>
						<p className={cls.content_item_text}>
							Подготовка материалов: мелкие фрагменты соевого воска, фитиль для свечи,
							ароматизаторы, красители и другие дополнительные материалы.
						</p>
						<img className={cls.content_item_img} src={step_img_1} alt="Подготовка материалов" />
					</li>
					<li className={cls.content_item + ' ' + cls.content_item_odd}>
						<p className={cls.content_item_text}>
							Подготовка формы: выбор формы для свечи и подготовка ее к наполнению воском.
						</p>
						<img className={cls.content_item_img} src={step_img_2} alt="Подготовка формы" />
					</li>
					<li className={cls.content_item + ' ' + cls.content_item_even}>
						<img className={cls.content_item_img} src={step_img_3} alt="Приготовление воска" />
						<p className={cls.content_item_text}>
							Приготовление воска: расплавление соевого воска в плавильном устройстве
							до нужной температуры. Добавление ароматизаторов и красителей по мере необходимости.
						</p>
					</li>
					<li className={cls.content_item + ' ' + cls.content_item_even}>
						<img className={cls.content_item_img} src={step_img_4} alt="Подготовка фитиля" />
						<p className={cls.content_item_text}>
							Подготовка фитиля: вставьте фитиль в форму и зафиксируйте его так, чтобы он был равномерно напряжен.
						</p>
					</li>
					<li className={cls.content_item + ' ' + cls.content_item_odd}>
						<p className={cls.content_item_text}>
							Подготовка материалов: мелкие фрагменты соевого воска,
							фитиль для свечи, ароматизаторы, красители и другие дополнительные материалы.
						</p>
						<img className={cls.content_item_img} src={step_img_5} alt="Подготовка материалов" />
					</li>
					<li className={cls.content_item + ' ' + cls.content_item_odd}>
						<p className={cls.content_item_text}>
							Наполнение формы: воск налить до формы, пока она не заполнится полностью. Ждать, пока он затвердеет.
						</p>
						<img className={cls.content_item_img} src={step_img_6} alt="Наполнение формы" />
					</li>
					<li className={cls.content_item + ' ' + cls.content_item_even}>
						<img className={cls.content_item_img} src={step_img_7} alt="Приготовление воска" />
						<p className={cls.content_item_text}>
							Приготовление воска: расплавление соевого воска в плавильном
							устройстве до нужной температуры. Добавление ароматизаторов и красителей по мере необходимости.
						</p>
					</li>
					<li className={cls.content_item + ' ' + cls.content_item_even}>
						<img className={cls.content_item_img} src={step_img_8} alt="Подготовка фитиля" />
						<p className={cls.content_item_text}>
							Подготовка фитиля: вставьте фитиль в форму и
							зафиксируйте его так, чтобы он был равномерно напряжен.
						</p>
					</li>
					<li className={cls.content_item + ' ' + cls.content_item_odd}>
						<p className={cls.content_item_text}>
							Подготовка материалов: мелкие фрагменты соевого воска,
							фитиль для свечи, ароматизаторы, красители и другие дополнительные материалы.
						</p>
						<img className={cls.content_item_img} src={step_img_9} alt="Подготовка материалов" />
					</li>
					<li className={cls.content_item + ' ' + cls.content_item_odd}>
						<p className={cls.content_item_text}>
							Наполнение формы: воск налить до формы, пока она не заполнится полностью. Ждать, пока он затвердеет.
						</p>
						<img className={cls.content_item_img} src={step_img_10} alt="Наполнение формы" />
					</li>
				</ol>

			</div>
		</section>
	);
};