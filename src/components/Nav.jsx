import Logo from "../assets/images/logo-bookmark.svg";
import BurgerBtn from "../assets/images/icon-hamburger.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Nav() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleBurgerClick = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<div className="navigation">
			<img src={Logo} alt="company logo" />
			<img src={BurgerBtn} alt="menu button" onClick={handleBurgerClick} />
			{isMobileMenuOpen && <MobileMenu closeMobileMenu={closeMobileMenu} />}
		</div>
	);
}
