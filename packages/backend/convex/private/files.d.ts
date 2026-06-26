import { EntryId } from "@convex-dev/rag";
export declare const deleteFile: import("convex/server").RegisteredMutation<"public", {
    entryId: string & {
        _: "EntryId";
    };
}, Promise<void>>;
export declare const addFile: import("convex/server").RegisteredAction<"public", {
    category?: string | undefined;
    bytes: ArrayBuffer;
    filename: string;
    mimeType: string;
}, Promise<{
    url: string | null;
    entryId: string & {
        _: "EntryId";
    };
}>>;
export declare const list: import("convex/server").RegisteredQuery<"public", {
    category?: string | undefined;
    paginationOpts: {
        id?: number | undefined;
        endCursor?: string | null | undefined;
        maximumRowsRead?: number | undefined;
        maximumBytesRead?: number | undefined;
        numItems: number;
        cursor: string | null;
    };
}, Promise<{
    page: PublicFile[];
    isDone: boolean;
    continueCursor: string;
}>>;
export type PublicFile = {
    id: EntryId;
    name: string;
    type: string;
    size: string;
    status: "ready" | "processing" | "error";
    url: string | null;
    category?: string;
};
//# sourceMappingURL=files.d.ts.map