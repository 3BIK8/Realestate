import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<section className="f-wrapper">
			<div className="paddings innerWidth flexCenter f-container">
				<div className="flexColStart f-left">
					<img src="./logo2.png" alt="logo" width={120} />

					<span className="secondaryText">
						Our vision is to find for all people <br /> the best place for them
						to live.
					</span>
				</div>
				<div className="flexColStart f-right">
					<span className="primaryText">Information</span>
					<span className="secondaryText">145 New York, FL 5467, USA</span>
					<div className="flexCenter f-menu">
						<a href="">Property</a>
						<a href="">Services</a>
						<a href="">Product</a>
						<a href="">About Us</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
