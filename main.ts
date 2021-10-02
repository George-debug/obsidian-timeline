import { Plugin, MarkdownView, TFile } from "obsidian";

import timelineHandlers from "./src/codeBlockHandler";
import EventFactory from "./src/EventFactory";

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
	// addLinksToCache(
	// 	links: NodeListOf<HTMLAnchorElement>,
	// 	sourcePath: string
	// ): void {
	// 	/* //@ts-expect-error
	//     this.app.metadataCache.resolveLinks(sourcePath); */
	// 	for (let i = 0; i < links.length; i++) {
	// 		const a = links[i];
	// 		if (a.dataset.href) {
	// 			let file = this.app.metadataCache.getFirstLinkpathDest(
	// 				a.dataset.href,
	// 				""
	// 			);
	// 			let cache, path;
	// 			if (file && file instanceof TFile) {
	// 				cache = this.app.metadataCache.resolvedLinks;
	// 				path = file.path;
	// 			} else {
	// 				cache = this.app.metadataCache.unresolvedLinks;
	// 				path = a.dataset.href;
	// 			}
	// 			if (!cache[sourcePath]) {
	// 				cache[sourcePath] = {
	// 					[path]: 0,
	// 				};
	// 			}
	// 			let resolved = cache[sourcePath];
	// 			if (!resolved[path]) {
	// 				resolved[path] = 0;
	// 			}
	// 			resolved[path] += 1;
	// 			cache[sourcePath] = resolved;
	// 		}
	// 	}
	// }

	onload = async () => {
		timelineHandlers.forEach(({ tag, handler }) => {
			this.registerMarkdownCodeBlockProcessor(tag, (source, el, ctx) => {
				let mainLine = el.createDiv({
					cls: "main-line",
				});
				el.addClass("timeline");
				let classMatch = source.match(classRegex);
				if (classMatch !== null) {
					let classes = stringToClassArray(classMatch[0]);
					el.addClasses(classes);
				}

				let eventFactory = new EventFactory(el, ctx.sourcePath);
				handler(source, eventFactory);
				mainLine.style.gridRowEnd = `${eventFactory.getEventCounter() + 1}`;

				// const links = el.querySelectorAll<HTMLAnchorElement>("a.internal-link");
				// this.addLinksToCache(links, ctx.sourcePath);
			});

			// this.registerEvent(
			// 	this.app.metadataCache.on("resolve", (file) => {
			// 		if (this.app.workspace.getActiveFile() != file) return;

			// 		const view = this.app.workspace.getActiveViewOfType(MarkdownView);

			// 		if (!view || !(view instanceof MarkdownView)) return;

			// 		const admonitionLinks =
			// 			view.contentEl.querySelectorAll<HTMLAnchorElement>(
			// 				"a.internal-link"
			// 			);

			// 		this.addLinksToCache(admonitionLinks, file.path);
			// 	})
			// );
		});
	};
}
