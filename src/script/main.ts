import { Plugin, MarkdownView, TFile } from "obsidian";

import TagParsers from "./TagParsers";
import TimelineElement from "./TimelineElement";

const classRegex = /(?<=^\s*)\[.+?\]/gs;

const stringToClassArray = (input: string): string[] => {
	input = input.trim();
	if (input[0] != "[" || input[input.length - 1] != "]") return [];

	return input
		.substring(1, input.length - 1)
		.trim()
		.split(/\s*,\s*/);
};

export default class MyPlugin extends Plugin {
	onload = async () => {
		TagParsers.forEach(({ tag, parser }) => {
			this.registerMarkdownCodeBlockProcessor(tag, (source, el, ctx) => {
				el.addClass("timeline");
				const classMatch = source.match(classRegex);
				if (classMatch !== null) {
					const classes = stringToClassArray(classMatch[0]);
					el.addClasses(classes);
				}

				const timelineElement = new TimelineElement(el, ctx.sourcePath);
				// handler(source, eventFactory);
				// mainLine.style.gridRowEnd = `${eventFactory.getEventCounter() + 1}`;
			});
		});
	};


	onunload = async () => {
		console.log("timeline onunload");
	}
}
