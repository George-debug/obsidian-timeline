interface TimelineEventInfo {
    time?: string,
    title?: string,
    description?: string
}

type Parser = (source: string) => TimelineEventInfo[];

interface TagParser {
    tag: string,
    parser: Parser
}