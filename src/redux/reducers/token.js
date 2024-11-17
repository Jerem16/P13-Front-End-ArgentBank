export function splitAndStoreToken(token) {
    const tokenPart1 = token.slice(0, token.length / 2);
    const tokenPart2 = token.slice(token.length / 2);

    document.cookie = `secure_token_part1=${encodeURIComponent(
        tokenPart1
    )}; Secure; SameSite=Strict; Path=/`;

    localStorage.setItem("secure_token_part2", tokenPart2);
}

export function combineStoredToken() {
    const cookies = document.cookie.split(";");
    const tokenPart2 = localStorage.getItem("secure_token_part2");
    let tokenPart1 = null;
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split("=");
        if (name === "secure_token_part1") {
            tokenPart1 = decodeURIComponent(value);
            break;
        }
    }
    if (!tokenPart1 || !tokenPart2) {
        return null;
    }
    const completeToken = tokenPart1 + tokenPart2;

    return completeToken;
}

export function clearStoredToken() {
    document.cookie =
        "secure_token_part1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";

    localStorage.removeItem("secure_token_part2");
}
