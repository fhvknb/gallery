
export function getTargetUrl(type: "DATA" | "IMG", group: string) {
  if (type === "IMG") {
    return `https://raw.githubusercontent.com/fhvknb/raw-assets/master/${group}/`;
  } else {
    return `https://raw.githubusercontent.com/fhvknb/raw-assets/master/json/${group}.json`;
  }
}
