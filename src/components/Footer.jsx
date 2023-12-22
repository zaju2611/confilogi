import Logo from "../assets/images/logo-bookmark-white.svg";
import FBLogo from "../assets/images/icon-facebook.svg";
import TwitterLogo from "../assets/images/icon-twitter.svg";

export default function Footer() {
	return (
		<div className="footer ">
			<div className="footerContainer">
				<img className="footerLogo logo" src={Logo} alt="Bookmark logo" />
				<p className="footerLink">FEATURES</p>
				<p className="footerLink">PRICING</p>
				<p className="footerLink">CONTACT</p>
			</div>
			<div className="socials">
				<img className="socialLogo" src={FBLogo} alt="Facebook logo" />
				<img className="socialLogo" src={TwitterLogo} alt="Twitter logo" />
			</div>
		</div>
	);
}
