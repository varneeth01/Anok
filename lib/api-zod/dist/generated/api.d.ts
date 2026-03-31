
import * as zod from "zod";
/**
 * Returns server health status
 * @summary Health check
 */
export declare const HealthCheckResponse: zod.ZodObject<{
    status: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    status: string;
}, {
    status: string;
}>;
//# sourceMappingURL=api.d.ts.map