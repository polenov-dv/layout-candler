import cls from './SectionPromo.module.scss';

export const SectionPromo = () => {
	return (
		<section className={cls.sectionPromo}>
			<div className={cls.inner}>
				<p className={cls.text}>
					Покупайте больше, экономьте больше
				</p>

				<a className={cls.link} href="#">
					В каталог
				</a>
			</div>
		</section>
	);
};