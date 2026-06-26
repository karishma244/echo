import { v } from "convex/values";
import { internal } from "../_generated/api";
import { action } from "../_generated/server";
export const getVapiSecrets = action({
    args: {
        organizationId: v.string(),
    },
    handler: async (ctx, args) => {
        const plugin = await ctx.runQuery(internal.system.plugins.getByOrganizationIdAndService, {
            organizationId: args.organizationId,
            service: "vapi",
        });
        if (!plugin) {
            return null;
        }
        if (!plugin.value?.publicApiKey) {
            return null;
        }
        return {
            publicApiKey: plugin.value.publicApiKey,
        };
    },
});
