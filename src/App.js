import "./App.css";

import Form from "./components/Form";
import Paragraph from "./components/Paragraph";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="container">
			<div className="header">
				<h1>Text Generator App</h1>
			</div>
			<Form />
			<Paragraph />
			<Footer />
		</div>
	);
}

export default App;
