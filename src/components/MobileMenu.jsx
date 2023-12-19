import Logo from "../assets/images/logo-bookmark-white-full.svg";
import Close from "../assets/images/icon-close.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";

export default function MobileMenu({ closeMobileMenu }) {
	return (
		<div className="menuContainer">
			<div className="menuOptionsContainer">
				<div className="menuLogoContainer">
					<img src={Logo} alt="logo" />
					<img
						className="closeMenu"
						src={Close}
						alt="close button"
						onClick={closeMobileMenu}
					/>
				</div>
				<p className="menuOption">FEATURES</p>
				<p className="menuOption">PRICING</p>
				<p className="menuOption">CONTACT</p>
				<button className="menuButton">LOGIN</button>
			</div>
			<div className="logoContainer">
				<img src={Facebook} alt="Facebook logo" />
				<img src={Twitter} alt="Twitter logo" />
			</div>
		</div>
	);
}
