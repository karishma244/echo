export declare const getMany: import("convex/server").RegisteredQuery<"public", {
    contactSessionId: import("convex/values").GenericId<"contactSessions">;
    paginationOpts: {
        id?: number | undefined;
        endCursor?: string | null | undefined;
        maximumRowsRead?: number | undefined;
        maximumBytesRead?: number | undefined;
        numItems: number;
        cursor: string | null;
    };
}, Promise<{
    page: {
        _id: import("convex/values").GenericId<"conversations">;
        _creationTime: number;
        status: "unresolved" | "escalated" | "resolved";
        organizationId: string;
        threadId: string;
        lastMessage: {
            id?: string | undefined;
            userId?: string | undefined;
            embeddingId?: string | undefined;
            fileIds?: string[] | undefined;
            error?: string | undefined;
            agentName?: string | undefined;
            model?: string | undefined;
            provider?: string | undefined;
            providerOptions?: Record<string, Record<string, any>> | undefined;
            message?: {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "user";
                content: string | ({
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    text: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    mimeType?: string | undefined;
                    type: "image";
                    image: string | ArrayBuffer;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    filename?: string | undefined;
                    type: "file";
                    mimeType: string;
                    data: string | ArrayBuffer;
                })[];
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "assistant";
                content: string | ({
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    text: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    filename?: string | undefined;
                    type: "file";
                    mimeType: string;
                    data: string | ArrayBuffer;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    signature?: string | undefined;
                    type: "reasoning";
                    text: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "redacted-reasoning";
                    data: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "tool-call";
                    toolCallId: string;
                    toolName: string;
                    args: any;
                })[];
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "tool";
                content: {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    args?: any;
                    experimental_content?: ({
                        type: "text";
                        text: string;
                    } | {
                        mimeType?: string | undefined;
                        type: "image";
                        data: string;
                    })[] | undefined;
                    isError?: boolean | undefined;
                    type: "tool-result";
                    toolCallId: string;
                    toolName: string;
                    result: any;
                }[];
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "system";
                content: string;
            } | undefined;
            text?: string | undefined;
            reasoning?: string | undefined;
            usage?: {
                promptTokens: number;
                completionTokens: number;
                totalTokens: number;
            } | undefined;
            providerMetadata?: Record<string, Record<string, any>> | undefined;
            sources?: {
                title?: string | undefined;
                providerOptions?: Record<string, Record<string, any>> | undefined;
                id: string;
                sourceType: "url";
                url: string;
            }[] | undefined;
            reasoningDetails?: ({
                signature?: string | undefined;
                type: "text";
                text: string;
            } | {
                type: "redacted";
                data: string;
            })[] | undefined;
            warnings?: ({
                details?: string | undefined;
                type: "unsupported-setting";
                setting: string;
            } | {
                details?: string | undefined;
                type: "unsupported-tool";
                tool: any;
            } | {
                type: "other";
                message: string;
            })[] | undefined;
            finishReason?: "length" | "error" | "other" | "stop" | "content-filter" | "tool-calls" | "unknown" | undefined;
            _id: string;
            _creationTime: number;
            status: "pending" | "success" | "failed";
            order: number;
            threadId: string;
            stepOrder: number;
            tool: boolean;
        } | null;
    }[];
    isDone: boolean;
    continueCursor: import("convex/server").Cursor;
    splitCursor?: import("convex/server").Cursor | null;
    pageStatus?: "SplitRecommended" | "SplitRequired" | null;
}>>;
export declare const getOne: import("convex/server").RegisteredQuery<"public", {
    contactSessionId: import("convex/values").GenericId<"contactSessions">;
    conversationId: import("convex/values").GenericId<"conversations">;
}, Promise<{
    _id: import("convex/values").GenericId<"conversations">;
    status: "unresolved" | "escalated" | "resolved";
    threadId: string;
}>>;
export declare const create: import("convex/server").RegisteredMutation<"public", {
    organizationId: string;
    contactSessionId: import("convex/values").GenericId<"contactSessions">;
}, Promise<import("convex/values").GenericId<"conversations">>>;
//# sourceMappingURL=conversations.d.ts.map