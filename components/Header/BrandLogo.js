import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo.svg";

const BrandLogo = (props) => {
	return (
		<div>
			<Link href='/'>
				<Image src={logo} alt='Website logo' />
			</Link>
		</div>
	);
};

export default BrandLogo;
