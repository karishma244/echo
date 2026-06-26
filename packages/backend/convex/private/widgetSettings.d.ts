export declare const upsert: import("convex/server").RegisteredMutation<"public", {
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
}, Promise<void>>;
export declare const getOne: import("convex/server").RegisteredQuery<"public", {}, Promise<{
    _id: import("convex/values").GenericId<"widgetSettings">;
    _creationTime: number;
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
} | null>>;
//# sourceMappingURL=widgetSettings.d.ts.map