export declare const escalate: import("convex/server").RegisteredMutation<"internal", {
    threadId: string;
}, Promise<void>>;
export declare const resolve: import("convex/server").RegisteredMutation<"internal", {
    threadId: string;
}, Promise<void>>;
export declare const getByThreadId: import("convex/server").RegisteredQuery<"internal", {
    threadId: string;
}, Promise<{
    _id: import("convex/values").GenericId<"conversations">;
    _creationTime: number;
    organizationId: string;
    status: "unresolved" | "escalated" | "resolved";
    threadId: string;
    contactSessionId: import("convex/values").GenericId<"contactSessions">;
} | null>>;
//# sourceMappingURL=conversations.d.ts.map