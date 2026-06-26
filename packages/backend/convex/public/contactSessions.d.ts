export declare const create: import("convex/server").RegisteredMutation<"public", {
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
}, Promise<import("convex/values").GenericId<"contactSessions">>>;
export declare const validate: import("convex/server").RegisteredMutation<"public", {
    contactSessionId: import("convex/values").GenericId<"contactSessions">;
}, Promise<{
    valid: boolean;
    reason: string;
    contactSession?: undefined;
} | {
    valid: boolean;
    contactSession: {
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
    };
    reason?: undefined;
}>>;
//# sourceMappingURL=contactSessions.d.ts.map