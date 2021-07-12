import {
	Plugin,
	MarkdownPostProcessorContext,
	MarkdownRenderer,
} from "obsidian";

//string to array of classes
const arrayToClasses = (input: string): string[] => {
	input = input.trim();
	if (input[0] != "[" || input[input.length - 1] != "]") return [];

	return input
		.substring(1, input.length - 1)
		.trim()
		.split(/\s*,\s*/);
};

class EventFactory {
	root: HTMLElement;
	sourcePath: string;

	constructor(root: HTMLElement, sourcePath: string) {
		this.root = root;
		this.sourcePath = sourcePath;
	}

	//remove first child's top margin and last child's bottom margin
	regulate(component: HTMLDivElement) {
		let aux = component.lastChild as HTMLElement;
		aux.style.marginBottom = "0";
		aux = component.firstChild as HTMLElement;
		aux.style.marginTop = "0";
	}

	create(time: string, title: string, description: string) {
		let timeEl = this.root.createDiv({ cls: "time" });
		let infoEl = this.root.createDiv({ cls: "info" });
		let titleEl = infoEl.createDiv({ cls: "title" });
		let descriptionEl = infoEl.createDiv({ cls: "description" });

		MarkdownRenderer.renderMarkdown(time, timeEl, this.sourcePath, null);
		MarkdownRenderer.renderMarkdown(title, titleEl, this.sourcePath, null);
		MarkdownRenderer.renderMarkdown(
			description,
			descriptionEl,
			this.sourcePath,
			null
		);

		this.regulate(descriptionEl);
		this.regulate(timeEl);
		this.regulate(titleEl);
	}
}

const codeBlockHandler = (
	source: string,
	el: HTMLElement,
	ctx: MarkdownPostProcessorContext
) => {
	//Initial State
	el.addClass("timeline");
	let ef = new EventFactory(el, ctx.sourcePath);

	//source to events
	const events: string[] = source
		.split(/^\s*\+ ?/gm)
		.map((event) => (event.trim().length != 0 ? event : "\u200B"));
	for (let elClass of arrayToClasses(events[0])) el.addClass(elClass);

	const incompleteCounter = (events.length - 1) % 3;
	const completeCounter = events.length - 1 - incompleteCounter;

	//build it
	el.createDiv({
		cls: "main-line",
		attr: {
			style: `grid-row-end: ${
				completeCounter / 3 + 1 + (incompleteCounter != 0 ? 1 : 0)
			}`,
		},
	});
	for (let i = 1; i < completeCounter; i += 3) {
		ef.create(events[i], events[i + 1], events[i + 2]);
	}

	switch (incompleteCounter) {
		case 1:
			ef.create(events[completeCounter + 1], "", "");
			return;
		case 2:
			ef.create(events[completeCounter + 1], events[completeCounter + 2], "");
			return;
		default:
			return;
	}
};

export default class MyPlugin extends Plugin {
	onload() {
		this.registerMarkdownCodeBlockProcessor("timeline", codeBlockHandler);
	}
}
