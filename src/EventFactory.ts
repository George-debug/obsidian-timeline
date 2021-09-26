import { MarkdownRenderer, MarkdownRenderChild } from "obsidian";

//remove first child's top margin and last child's bottom margin

const trim = (s: string) => {
	if (s == null) {
		s = "";
		return;
	}
	s = s.trim();
	if (s.length === 0) s = "\u200B";
};

export default class EventFactory {
	#root: HTMLElement;
	#sourcePath: string;
	//#markdownRenderChild: MarkdownRenderChild;
	#eventCounter: number;

	constructor(root: HTMLElement, sourcePath: string) {
		this.#root = root;
		this.#sourcePath = sourcePath;
		//this.#markdownRenderChild = new MarkdownRenderChild(root);
		//this.markdownRenderChild.containerEl = root;
		this.#eventCounter = 0;
	}

	create = (time: string, title: string, description: string) => {
		trim(time);
		trim(title);
		trim(description);

		let timeContainerEl = this.#root.createDiv({ cls: "time-container" }),
			timeEl = timeContainerEl.createDiv({ cls: "time" }),
			infoEl = this.#root.createDiv({ cls: "info" }),
			titleEl = infoEl.createDiv({ cls: "title" }),
			descriptionEl = infoEl.createDiv({ cls: "description" });

		MarkdownRenderer.renderMarkdown(
			time,
			timeEl,
			this.#sourcePath,
			null //this.#markdownRenderChild
		);
		MarkdownRenderer.renderMarkdown(
			title,
			titleEl,
			this.#sourcePath,
			null //this.#markdownRenderChild
		);
		MarkdownRenderer.renderMarkdown(
			description,
			descriptionEl,
			this.#sourcePath,
			null //this.#markdownRenderChild
		);

		// regulate(descriptionEl);
		// regulate(timeEl);
		// regulate(titleEl);

		++this.#eventCounter;
	};

	getEventCounter = () => this.#eventCounter;
}
