import { MarkdownPostProcessorContext, MarkdownRenderer } from "obsidian";

import EventFactory from "./EventFactory";

const labeledRegex =
	/^[ \t]*(?:date:)(.+?)(?:^[ \t]*(?:title:)(.+?))?(?:^[ \t]*(?:content:)(.+?))?(?=^[ \t]*date:)/gimsu;

//it uses the EventFactory provided to parse the source into Events
const timelineLabeledHandler = (source: string, eventFactory: EventFactory) => {
	source += "\ndate: ";

	let sourceMatch;

	while ((sourceMatch = labeledRegex.exec(source)) !== null) {
		eventFactory.create(sourceMatch[1], sourceMatch[2], sourceMatch[3]);
	}
};

const timelineHandler = (source: string, eventFactory: EventFactory) => {
	//source to events
	const sourceSplitted = source.split(/^\s*\+ ?/gm).slice(1);

	//this is code is not readable
	//sourceSplitted.push(...new Array(3 - (sourceSplitted.length % 3)).fill(""));

	//adding 2 empty stings and 2 to sourceSplitted.length is safe and readble
	sourceSplitted.push("", "");

	const counter = sourceSplitted.length - (sourceSplitted.length % 3);

	for (let i = 0; i < counter; i += 3) {
		eventFactory.create(
			sourceSplitted[i],
			sourceSplitted[i + 1],
			sourceSplitted[i + 2]
		);
	}
};

const toExport = [
	{ tag: "timeline", handler: timelineHandler },
	{ tag: "timeline-labeled", handler: timelineLabeledHandler },
];

export default toExport;
