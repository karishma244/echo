export declare const enhanceResponse: import("convex/server").RegisteredAction<"public", {
    prompt: string;
}, Promise<string>>;
export declare const create: import("convex/server").RegisteredMutation<"public", {
    conversationId: import("convex/values").GenericId<"conversations">;
    prompt: string;
}, Promise<void>>;
export declare const getMany: import("convex/server").RegisteredQuery<"public", {
    threadId: string;
    paginationOpts: {
        id?: number | undefined;
        endCursor?: string | null | undefined;
        maximumRowsRead?: number | undefined;
        maximumBytesRead?: number | undefined;
        numItems: number;
        cursor: string | null;
    };
}, Promise<import("convex/server").PaginationResult<{
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
}>>>;
//# sourceMappingURL=messages.d.ts.map