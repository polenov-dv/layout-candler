import cls from './SectionContacts.module.scss';
import contact_img from 'shared/assets/images/contact.jpg';

export const SectionContacts = () => {
	return (
		<section id='sectionContacts' className={cls.sectionContacts}>
			<div className={cls.inner}>
				<form className={cls.form}>
					<p className={cls.form_title}>
						Подпишись на наши акции
					</p>
					<input className={cls.form_input} type='text' placeholder='Имя'></input>
					<input className={cls.form_input} type='email' placeholder='E-mail'></input>
					<button className={cls.form_btn} type='submit'>Подписаться</button>
				</form>
				<img className={cls.contact_img} src={contact_img} alt="Контакты" />
			</div>
		</section>
	);
};