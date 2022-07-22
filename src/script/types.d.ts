interface TimelineEventInfo {
    [key: string]: string,
    time: string,
    title: string,
    description: string
}

type Parser = (source: string) => TimelineEventInfo[];

interface TagParser {
    tag: string,
    parser: Parser
}