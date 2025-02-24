export function calculateDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export function validatePosition({ x, y }) {
    if (isNaN(x) || isNaN(y)) {
        console.error(
            'Invalid arguments, please add valid numbers as coordinates.',
        );
    }
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function findClosestThree(arr) {
    return [...arr].sort((a, b) => a - b).slice(0, 3);
}
