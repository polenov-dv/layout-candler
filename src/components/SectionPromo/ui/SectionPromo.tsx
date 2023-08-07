import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SectionPromo.module.scss';

interface SectionPromoProps {
	className?: string
}

export const SectionPromo = ({ className }: SectionPromoProps) => {
	return (
		<section className={classNames(cls.sectionPromo, {}, [className])}>
			<div className={classNames(cls.inner, {}, ['container'])}>
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