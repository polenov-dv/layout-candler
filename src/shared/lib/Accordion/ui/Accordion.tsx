import React, { useEffect, useState } from "react";
import cls from './Accordion.module.scss';
import { useSpring, animated } from "react-spring";

interface Props {
	title: string;
	description: React.ReactNode;
}

export default function Accordion({ title, description }: Props) {
	const [isActive, setIsActive] = useState(false);

	const openAnimation = useSpring({
		from: { maxHeight: 25 },
		to: { maxHeight: isActive ? 200 : 25 },
		config: { duration: 300 }
	});

	return (
		<>
			<button
				onClick={() => setIsActive(!isActive)}
				className={isActive ? `${cls.accordeon_title} ${cls.accordeon_off}` : `${cls.accordeon_title} ${cls.accordeon_on}`}
			>
				{title}
			</button>
			{isActive &&
				<div className={cls.accordeon_text}>
					<animated.p style={openAnimation}>{description}</animated.p>
				</div>
			}
		</>
	)
}

