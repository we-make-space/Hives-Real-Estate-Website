import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Layout } from "./Modules/Components";
import { Home, NotFound, WeAre } from "./Modules/Pages";

function App() {
	return (
		<>
			<Suspense>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>

		</>
	);
}

export default App;
