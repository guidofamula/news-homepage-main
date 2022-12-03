import React from "react";

import { BrandLogo, FeaturedPost, Navmenu, SideHeader } from "./indexHeader";

const HeaderContainer = () => {
	return (
		<div>
			<BrandLogo />
			<Navmenu />
			<FeaturedPost />
			<SideHeader />
		</div>
	);
};

export default HeaderContainer;
