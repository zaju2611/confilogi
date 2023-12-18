import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

export default function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (nextIndex) => {
		if (expandedIndex === nextIndex) {
			setExpandedIndex(-1);
		} else {
			setExpandedIndex(nextIndex);
		}
	};

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;

		const icon = (
			<span className="accordionIcon">
				{isExpanded ? <GoChevronLeft /> : <GoChevronDown />}
			</span>
		);

		return (
			<div key={item.id}>
				<div
					className="accordionItem"
					onClick={() => {
						handleClick(index);
					}}>
					{item.label}
					{icon}
				</div>
				{isExpanded && <div className="accordionContent">{item.content}</div>}
			</div>
		);
	});

	return <div className="questionsAccordion">{renderedItems}</div>;
}
