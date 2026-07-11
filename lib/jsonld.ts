export function jsonLdObject(schema: object) {
  return JSON.stringify(schema);
}

export function jsonLdScriptTag(schema: object) {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
