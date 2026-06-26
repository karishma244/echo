declare const _default: import("convex/server").SchemaDefinition<{
    subscriptions: import("convex/server").TableDefinition<import("convex/values").VObject<{
        organizationId: string;
        status: string;
    }, {
        organizationId: import("convex/values").VString<string, "required">;
        status: import("convex/values").VString<string, "required">;
    }, "required", "organizationId" | "status">, {
        by_organization_id: ["organizationId", "_creationTime"];
    }, {}, {}>;
    widgetSettings: import("convex/server").TableDefinition<import("convex/values").VObject<{
        organizationId: string;
        greetMessage: string;
        defaultSuggestions: {
            suggestion1?: string | undefined;
            suggestion2?: string | undefined;
            suggestion3?: string | undefined;
        };
        vapiSettings: {
            assistantId?: string | undefined;
            phoneNumber?: string | undefined;
        };
    }, {
        organizationId: import("convex/values").VString<string, "required">;
        greetMessage: import("convex/values").VString<string, "required">;
        defaultSuggestions: import("convex/values").VObject<{
            suggestion1?: string | undefined;
            suggestion2?: string | undefined;
            suggestion3?: string | undefined;
        }, {
            suggestion1: import("convex/values").VString<string | undefined, "optional">;
            suggestion2: import("convex/values").VString<string | undefined, "optional">;
            suggestion3: import("convex/values").VString<string | undefined, "optional">;
        }, "required", "suggestion1" | "suggestion2" | "suggestion3">;
        vapiSettings: import("convex/values").VObject<{
            assistantId?: string | undefined;
            phoneNumber?: string | undefined;
        }, {
            assistantId: import("convex/values").VString<string | undefined, "optional">;
            phoneNumber: import("convex/values").VString<string | undefined, "optional">;
        }, "required", "assistantId" | "phoneNumber">;
    }, "required", "organizationId" | "greetMessage" | "defaultSuggestions" | "vapiSettings" | "defaultSuggestions.suggestion1" | "defaultSuggestions.suggestion2" | "defaultSuggestions.suggestion3" | "vapiSettings.assistantId" | "vapiSettings.phoneNumber">, {
        by_organization_id: ["organizationId", "_creationTime"];
    }, {}, {}>;
    plugins: import("convex/server").TableDefinition<import("convex/values").VObject<{
        organizationId: string;
        service: "vapi";
        value: {
            publicApiKey: string;
            privateApiKey: string;
        };
    }, {
        organizationId: import("convex/values").VString<string, "required">;
        service: import("convex/values").VUnion<"vapi", [import("convex/values").VLiteral<"vapi", "required">], "required", never>;
        value: import("convex/values").VObject<{
            publicApiKey: string;
            privateApiKey: string;
        }, {
            publicApiKey: import("convex/values").VString<string, "required">;
            privateApiKey: import("convex/values").VString<string, "required">;
        }, "required", "publicApiKey" | "privateApiKey">;
    }, "required", "organizationId" | "service" | "value" | "value.publicApiKey" | "value.privateApiKey">, {
        by_organization_id: ["organizationId", "_creationTime"];
        by_organization_id__and_service: ["organizationId", "service", "_creationTime"];
    }, {}, {}>;
    conversations: import("convex/server").TableDefinition<import("convex/values").VObject<{
        organizationId: string;
        status: "unresolved" | "escalated" | "resolved";
        threadId: string;
        contactSessionId: import("convex/values").GenericId<"contactSessions">;
    }, {
        threadId: import("convex/values").VString<string, "required">;
        organizationId: import("convex/values").VString<string, "required">;
        contactSessionId: import("convex/values").VId<import("convex/values").GenericId<"contactSessions">, "required">;
        status: import("convex/values").VUnion<"unresolved" | "escalated" | "resolved", [import("convex/values").VLiteral<"unresolved", "required">, import("convex/values").VLiteral<"escalated", "required">, import("convex/values").VLiteral<"resolved", "required">], "required", never>;
    }, "required", "organizationId" | "status" | "threadId" | "contactSessionId">, {
        by_organization_id: ["organizationId", "_creationTime"];
        by_contact_session_id: ["contactSessionId", "_creationTime"];
        by_thread_id: ["threadId", "_creationTime"];
        by_status_and_organization_id: ["status", "organizationId", "_creationTime"];
    }, {}, {}>;
    contactSessions: import("convex/server").TableDefinition<import("convex/values").VObject<{
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
    }, {
        name: import("convex/values").VString<string, "required">;
        email: import("convex/values").VString<string, "required">;
        organizationId: import("convex/values").VString<string, "required">;
        expiresAt: import("convex/values").VFloat64<number, "required">;
        metadata: import("convex/values").VObject<{
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
        } | undefined, {
            userAgent: import("convex/values").VString<string | undefined, "optional">;
            language: import("convex/values").VString<string | undefined, "optional">;
            languages: import("convex/values").VString<string | undefined, "optional">;
            platform: import("convex/values").VString<string | undefined, "optional">;
            vendor: import("convex/values").VString<string | undefined, "optional">;
            screenResolution: import("convex/values").VString<string | undefined, "optional">;
            viewportSize: import("convex/values").VString<string | undefined, "optional">;
            timezone: import("convex/values").VString<string | undefined, "optional">;
            timezoneOffset: import("convex/values").VFloat64<number | undefined, "optional">;
            cookiesEnabled: import("convex/values").VBoolean<boolean | undefined, "optional">;
            referrer: import("convex/values").VString<string | undefined, "optional">;
            currentUrl: import("convex/values").VString<string | undefined, "optional">;
        }, "optional", "userAgent" | "language" | "languages" | "platform" | "vendor" | "screenResolution" | "viewportSize" | "timezone" | "timezoneOffset" | "cookiesEnabled" | "referrer" | "currentUrl">;
    }, "required", "organizationId" | "name" | "email" | "expiresAt" | "metadata" | "metadata.userAgent" | "metadata.language" | "metadata.languages" | "metadata.platform" | "metadata.vendor" | "metadata.screenResolution" | "metadata.viewportSize" | "metadata.timezone" | "metadata.timezoneOffset" | "metadata.cookiesEnabled" | "metadata.referrer" | "metadata.currentUrl">, {
        by_organization_id: ["organizationId", "_creationTime"];
        by_expires_at: ["expiresAt", "_creationTime"];
    }, {}, {}>;
    users: import("convex/server").TableDefinition<import("convex/values").VObject<{
        name: string;
    }, {
        name: import("convex/values").VString<string, "required">;
    }, "required", "name">, {}, {}, {}>;
}, true>;
export default _default;
//# sourceMappingURL=schema.d.ts.map