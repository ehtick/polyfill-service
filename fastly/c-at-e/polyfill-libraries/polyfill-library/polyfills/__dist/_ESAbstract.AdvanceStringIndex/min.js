function AdvanceStringIndex(e,n,t){if(n>Number.MAX_SAFE_INTEGER)throw new TypeError("Assertion failed: `index` must be <= 2**53");return!1===t?n+1:n+1>=e.length?n+1:n+e.codePointAt(n).length}