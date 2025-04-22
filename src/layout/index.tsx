import { Outlet } from "react-router";
import { ContextProviders } from "../context/Providers";

const RootLayout = () => {
	return (<>
		<div id="header" className="place-content-center">
			<span className="SWStarter Text-Style-2">
				SWStarter
			</span>
		</div>
		<ContextProviders>
			<Outlet />
		</ContextProviders>
	</>);
}

export default RootLayout;