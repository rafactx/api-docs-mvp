import {
  nanoidSchema
} from "./chunk-6M3JNKJN.js";
import {
  z
} from "./chunk-OYO2YRBV.js";

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/cookie/cookie.js
var cookieSchema = z.object({
  uid: nanoidSchema.brand(),
  /**  Defines the cookie name and its value. A cookie definition begins with a name-value pair.  */
  name: z.string().default(""),
  value: z.string().default(""),
  /** Defines the host to which the cookie will be sent. */
  domain: z.string().optional(),
  /** Indicates the path that must exist in the requested URL for the browser to send the Cookie header. */
  path: z.string().optional()
});

export {
  cookieSchema
};
//# sourceMappingURL=chunk-OWXZB7P2.js.map
