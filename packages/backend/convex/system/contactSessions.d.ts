export declare const refresh: import("convex/server").RegisteredMutation<"internal", {
    contactSessionId: import("convex/values").GenericId<"contactSessions">;
}, Promise<{
    _id: import("convex/values").GenericId<"contactSessions">;
    _creationTime: number;
    metadata?: {
        userAgent?: string | undefined;
        language?: string | undefined;
        languages?: string | undefined;
        platform?: string | undefined;
        vendor?: string | undefined;
        screenResolution?: string | undefined;
        viewportSize?: string | undefined;
        timezone?: string | undefined;
        timezoneOffset?: number | undefined;
        cookiesEnabled?: boolean | undefined;
        referrer?: string | undefined;
        currentUrl?: string | undefined;
    } | undefined;
    organizationId: string;
    name: string;
    email: string;
    expiresAt: number;
}>>;
export declare const getOne: import("convex/server").RegisteredQuery<"internal", {
    contactSessionId: import("convex/values").GenericId<"contactSessions">;
}, Promise<{
    _id: import("convex/values").GenericId<"contactSessions">;
    _creationTime: number;
    metadata?: {
        userAgent?: string | undefined;
        language?: string | undefined;
        languages?: string | undefined;
        platform?: string | undefined;
        vendor?: string | undefined;
        screenResolution?: string | undefined;
        viewportSize?: string | undefined;
        timezone?: string | undefined;
        timezoneOffset?: number | undefined;
        cookiesEnabled?: boolean | undefined;
        referrer?: string | undefined;
        currentUrl?: string | undefined;
    } | undefined;
    organizationId: string;
    name: string;
    email: string;
    expiresAt: number;
} | null>>;
//# sourceMappingURL=contactSessions.d.ts.map