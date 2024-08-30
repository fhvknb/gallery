export function getTargetUrl(type: "DATA" | "IMG", group: string) {
  if (type === "IMG") {
    return `https://raw.githubusercontent.com/fhvknb/raw-assets/master/${group}/`;
  } else {
    return `https://raw.githubusercontent.com/fhvknb/raw-assets/master/json/${group}.json`;
  }
}

export function setCookie(name: string, value: string, days: number) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function deleteCookie(name: string) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export function getLoginCookie() {
  return document.cookie.includes("isLogin=1");
}

export function shuffleArray(arr: any[]) {
  if (!arr || !arr.length) {
    return [];
  }
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
