import Nav from "./components/Nav";
import HeaderSection from "./components/HeaderSection";
import FeaturesSection from "./components/FeaturesSection";
import OneClickSection from "./components/OneClickSection";
import ExtensionSection from "./components/ExtensionSection";
import QuestionsSection from "./components/QuestionsSection";
import Footer from "./components/Footer";

import NewsletterSection from "./components/NewsletterSection";

export default function App() {
	return (
		<>
			<div className="wrapper">
				<Nav />
				<HeaderSection />
				<FeaturesSection />
				<OneClickSection />
				<ExtensionSection />
				<QuestionsSection />
			</div>
			<NewsletterSection />
			<Footer />
		</>
	);
}
