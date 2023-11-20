import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPragraph } from "../redux/paragraphSlice";

function Form() {
	const [paragraphCount, setParagraphCount] = useState(4);
	const [incHtml, setIncHtml] = useState("");

	const dispatch = useDispatch();
	dispatch(getPragraph({ count: paragraphCount, innerHtml: incHtml }));

	const handleSelect = (index) => {
		index === "0" ? setIncHtml("") : setIncHtml("?p=true");
	};

	return (
		<div className="form">
			<div className="row">
				<label htmlFor="paragraphCount">Paragraph</label>
				<input type="number" id="paragraphCount" value={paragraphCount} onChange={(e) => setParagraphCount(e.target.value)} />
			</div>
			<div className="row">
				<label htmlFor="incHtml">Include HTML</label>
				<select name="" id="incHtml" onChange={(e) => handleSelect(e.target.value)}>
					<option value="0">No</option>
					<option value="1">Yes</option>
				</select>
			</div>
		</div>
	);
}

export default Form;
