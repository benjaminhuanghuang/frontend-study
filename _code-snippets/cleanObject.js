/*

Object.entries(this.formInline) Converts the this.formInline object into an array of key-value pairs.
like entries = [["name", "<script>"], ["email", "user@example.com"]]

DOMPurify.sanitize removes potentially harmful HTML or JavaScript from input values to prevent Cross-Site Scripting (XSS) attacks.

Object.fromEntries(...) Converts the sanitized array of key-value pairs back into an object.
*/

const data = Object.fromEntries(
  Object.entries(this.formInline).map(([key, value]) => [
    key,
    DOMPurify.sanitize(value),
  ])
);
