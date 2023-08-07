import "./styles/index.scss"
import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { SectionTop } from "components/SectionTop";
import { SectionAboutUs } from "components/SectionAboutUs";
import { SectionProducts } from "components/SectionProducts";
import { SectionSteps } from "components/SectionSteps/ui/SectionSteps";
import { SectionCourse } from "components/SectionCourse";
import { SectionTeam } from "components/SectionTeam";
import { SectionComments } from "components/SectionComments";
import { SectionCerts } from "components/SectionCerts";
import { SectionQuestions } from "components/SectionQuestions";
import { SectionPromo } from "components/SectionPromo";
import { SectionContacts } from "components/SectionContacts";

const App = () => {

	return (
		<div className={classNames('app', {}, [])}>
			<Header />
			<main>
				<SectionTop />
				<SectionAboutUs />
				<SectionProducts />
				<SectionSteps />
				<SectionCourse />
				<SectionTeam />
				<SectionComments />
				<SectionCerts />
				<SectionQuestions />
				<SectionPromo />
				<SectionContacts />
			</main>
			<Footer />
		</div>
	);
};

export default App;