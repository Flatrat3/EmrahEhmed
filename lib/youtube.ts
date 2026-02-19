import { XMLParser } from "fast-xml-parser";

export interface Video {
    id: string;
    title: string;
    link: string;
    thumbnail: string;
    published: string;
    views: string; // Not available in RSS, will need to be mocked or omitted
}

const CHANNEL_ID = "UCMNC-MoeVa6FQ-fCePyWuDw";

export async function getLatestVideos(): Promise<Video[]> {
    try {
        const response = await fetch(
            `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch videos: ${response.statusText}`);
        }

        const xmlText = await response.text();
        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: "@_",
        });
        const result = parser.parse(xmlText);

        const entries = result.feed?.entry || [];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return entries.map((entry: any) => ({
            id: entry["yt:videoId"],
            title: entry.title,
            link: entry.link["@_href"],
            thumbnail: `https://i.ytimg.com/vi/${entry["yt:videoId"]}/hqdefault.jpg`,
            published: new Date(entry.published).toLocaleDateString("az-AZ", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            views: "Baxış sayı gizli", // RSS feed doesn't provide view count
        })).slice(0, 5); // Return top 5 videos

    } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        return [];
    }
}
