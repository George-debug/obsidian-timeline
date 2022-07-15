import { MarkdownRenderer, MarkdownRenderChild } from "obsidian";

const trim = (s: string): string => {
	const trimmed = s.trim();
	return trimmed.length === 0 ? "\u200B" : trimmed;
};

export default class TimelineElement {
	private root: HTMLElement;
	private sourcePath: string;

	constructor(root: HTMLElement, sourcePath: string) {
		this.root = root;
		this.sourcePath = sourcePath;
		console.log(sourcePath);
	}

	public addEvent = (info: TimelineEventInfo) => {
		const timeContainerEl = this.root.createDiv({ cls: "time-container" });

		Object.entries(info).forEach(([key, val]) => {
			console.log(key, val);
		})

		// trim(time);
		// trim(title);
		// trim(description);

		// 	timeEl = timeContainerEl.createDiv({ cls: "time" }),
		// 	infoEl = this.root.createDiv({ cls: "info" }),
		// 	titleEl = infoEl.createDiv({ cls: "title" }),
		// 	descriptionEl = infoEl.createDiv({ cls: "description" });

		// MarkdownRenderer.renderMarkdown(
		// 	time,
		// 	timeEl,
		// 	this.sourcePath,
		// 	null
		// );
		// MarkdownRenderer.renderMarkdown(
		// 	title,
		// 	titleEl,
		// 	this.sourcePath,
		// 	null
		// );
		// MarkdownRenderer.renderMarkdown(
		// 	description,
		// 	descriptionEl,
		// 	this.sourcePath,
		// 	null
		// );

		// ++this.eventCounter;
	};

	// getEventCounter = () => this.eventCounter;
}
