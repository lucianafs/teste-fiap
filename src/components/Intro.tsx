import React, { useEffect, useState } from "react";
import styles from "../styles/intro.module.scss";

const Intro: React.FC = () => {
	const [scrollPercent, setScrollPercent] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const percent = docHeight > 0 ? scrollTop / docHeight : 0;
			setScrollPercent(percent);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const maxTranslate = 50;
	const translateX = scrollPercent * maxTranslate;
	const getInfiniteTranslate = (percent: number) => {
		return (percent * 50) % 50;
	};

	return (
		<section className={styles.intro}>

			<div className={styles.textBoxTop}>
				<div className={styles.titleWrapper}>
					<span className={`${styles.title} ${styles.titleRun}`}>
						TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.
					</span>
					<span className={`${styles.title} ${styles.titleRunReverse}`} >
						TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.
					</span>
				</div>
			</div>

			<div className={styles.textBoxBottom}>
				<div className={styles.titleWrapper}>
					<span
						className={styles.title}
						style={{transform: `translateX(-${getInfiniteTranslate(scrollPercent)}%)`}}
					>
						Skills Conhecimentos • Skills Conhecimentos • Skills Conhecimentos • Skills Conhecimentos • Skills Conhecimentos
					</span>
					<span
						className={styles.title}
						style={{transform: `translateX(${getInfiniteTranslate(scrollPercent)}%)`}}
					>
						MUITO ALÉM DOS TUTORIAIS. MUITO ALÉM DOS TUTORIAIS. MUITO ALÉM DOS TUTORIAIS. MUITO ALÉM DOS TUTORIAIS.
					</span>
				</div>
			</div>
			
			<div className={styles.imageContainer}>
				<img src="images/intro.png" alt="Imagem de introdução da landing page" className={styles.introImage} />
			</div>

		</section>
	);
};

export default Intro;