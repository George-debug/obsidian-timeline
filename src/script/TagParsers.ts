const labeledRegex =
	/^[ \t]*(?:date:)(.+?)(?:^[ \t]*(?:title:)(.+?))?(?:^[ \t]*(?:content:)(.+?))?(?=^[ \t]*date:)/gimsu;

const timelineLabeledHandler = (source: string): TimelineEventInfo[] => {
	source += "\ndate: ";

	let sourceMatch;

	while ((sourceMatch = labeledRegex.exec(source)) !== null) {
	}

	return [];
};

const timelineHandler = (source: string): TimelineEventInfo[] => {
	const sourceSplitted = source.split(/^\s*\+ ?/gm).slice(1);

	sourceSplitted.push("", "");

	const counter = sourceSplitted.length - (sourceSplitted.length % 3);

	for (let i = 0; i < counter; i += 3) {
	}

	return [];
};

const toExport:TagParser[] = [
	{ tag: "timeline", parser: timelineHandler },
	{ tag: "timeline-labeled", parser: timelineLabeledHandler },
];

export default toExport;
