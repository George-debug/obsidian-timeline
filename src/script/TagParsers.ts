const labeledRegex =
	/^[ \t]*date:(.+?)(?:^[ \t]*title:(.+?))?(?:^[ \t]*content:(.+?))?(?=^[ \t]*date:)/gimsu;

const timelineLabeledParser = (source: string): TimelineEventInfo[] => {
	source += "\ndate: ";
	let sourceMatch;
	const parsed = [];

	while ((sourceMatch = labeledRegex.exec(source)) !== null) {
		parsed.push({
			time: sourceMatch[1],
			title: sourceMatch[2],
			description: sourceMatch[3]
		})
	}

	return parsed;
};

const timelineParser = (source: string): TimelineEventInfo[] => {
	const sourceSplitted = source.split(/^\s*\+ ?/gm).slice(1);
	sourceSplitted.push("", "");

	const parsed = [];
	const counter = sourceSplitted.length - (sourceSplitted.length % 3);

	for (let i = 0; i < counter; i += 3) {
		parsed.push({
			time: sourceSplitted[i],
			title: sourceSplitted[i+1],
			description: sourceSplitted[i+2]
		})
	}

	return parsed;
};

const toExport:TagParser[] = [
	{ tag: "timeline", parser: timelineParser },
	{ tag: "timeline-labeled", parser: timelineLabeledParser },
];

export default toExport;
