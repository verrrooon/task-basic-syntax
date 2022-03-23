export function romanToInteger(str) {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;

    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    for (let i = 0; i < str.length; i++) {
        const a = roman[str[i]];
        const b = roman[str[i + 1]];
        if (a < b) {
            result += b - a;
            i++;
        } else {
            result += a;
        }
    }
    return result;
}
