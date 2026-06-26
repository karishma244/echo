import z from "zod";
export declare const search: import("ai").Tool<z.ZodObject<{
    query: z.ZodString;
}, "strip", z.ZodTypeAny, {
    query: string;
}, {
    query: string;
}>, string> & {
    execute: (args: {
        query: string;
    }, options: import("ai").ToolExecutionOptions) => PromiseLike<string>;
};
//# sourceMappingURL=search.d.ts.map