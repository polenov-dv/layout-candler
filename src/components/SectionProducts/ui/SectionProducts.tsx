import cls from './SectionProducts.module.scss';
import product_img_1 from 'shared/assets/images/product-1.jpg';
import product_img_2 from 'shared/assets/images/product-2.jpg';
import product_img_3 from 'shared/assets/images/product-3.jpg';
import product_img_4 from 'shared/assets/images/product-4.jpg';

export const SectionProducts = () => {
	return (
		<section id='sectionProducts' className={cls.sectionProducts}>
			<div className={cls.inner}>
				<div className={cls.descr}>
					<h2 className={cls.title}>
						Наши товары
					</h2>
					<p className={cls.descr_text}>
						Мы используем только лучшие качественные материалы: соевый воск,
						восковые красители, высококачественные ароматические масла и
						хлопковые фитильцы. Оттенки свечей очень гармонично сочетаются с
						ароматом, создавая незабываемую атмосферу в вашем доме.
					</p>
				</div>

				<div className={cls.content}>
					<div className={cls.content_item}>
						<img className={cls.content_item_img} src={product_img_1} alt="Продукт 1" />
						<p className={cls.content_item_price}>
							10$
						</p>
						<h4 className={cls.content_item_title}>
							Сердечко любви
						</h4>
						<p className={cls.content_item_text}>
							Запах: нежный аромат розы и ванили.
							Для чего: для атмосферы романтического настроения
						</p>
						<button className={cls.content_item_button}>
							Купить
						</button>
					</div>

					<div className={cls.content_item}>
						<img className={cls.content_item_img} src={product_img_2} alt="Продукт 2" />
						<p className={cls.content_item_price}>
							20$
						</p>
						<h4 className={cls.content_item_title}>
							Вихрь любви
						</h4>
						<p className={cls.content_item_text}>
							Запах: нежный аромат лаванды.
							Для чего: для создания атмосферы уюта
						</p>
						<button className={cls.content_item_button}>
							Купить
						</button>
					</div>

					<div className={cls.content_item}>
						<img className={cls.content_item_img} src={product_img_3} alt="Продукт 3" />
						<p className={cls.content_item_price}>
							10$
						</p>
						<h4 className={cls.content_item_title}>
							Радуга
						</h4>
						<p className={cls.content_item_text}>
							Запах: свежий аромат лайма.
							Для чего: для энергии и свежести в помещении.
						</p>
						<button className={cls.content_item_button}>
							Купить
						</button>
					</div>

					<div className={cls.content_item}>
						<img className={cls.content_item_img} src={product_img_4} alt="Продукт 4" />
						<p className={cls.content_item_price}>
							10$
						</p>
						<h4 className={cls.content_item_title}>
							Женское очарование
						</h4>
						<p className={cls.content_item_text}>
							Запах: нежный аромат лаванды и фрезий. Для чего: для уюта и комфорта.
						</p>
						<button className={cls.content_item_button}>
							Купить
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};