export declare const remove: import("convex/server").RegisteredMutation<"public", {
    service: "vapi";
}, Promise<void>>;
export declare const getOne: import("convex/server").RegisteredQuery<"public", {
    service: "vapi";
}, Promise<{
    _id: import("convex/values").GenericId<"plugins">;
    _creationTime: number;
    organizationId: string;
    service: "vapi";
    value: {
        publicApiKey: string;
        privateApiKey: string;
    };
} | null>>;
//# sourceMappingURL=plugins.d.ts.map