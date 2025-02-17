/**
 * @param {string} key
 * @param {string} value
 */
export function setItem(key, value) {
    localStorage.setItem(key, value);
}

/**
 * @param {string} key
 * @returns {string | null}
 */
export function getItem(key) {
    return localStorage.getItem(key);
}

/**
 * @param {string} key
 */
export function removeItem(key) {
    localStorage.removeItem(key);
}

export function clear() {
    localStorage.clear();
}

export function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}
