export class TendencyMath {
    static getAverage(list) {
        let sumNumbers = 0;

        for (const NUMBER of list) {
            sumNumbers += NUMBER;
        }

        const AVERAGE = sumNumbers / list.length;

        return AVERAGE;
    }

    static isOdd = (list) => Boolean(list.length % 2);

    static isEven = (list) => !(list.length % 2);

    static sortList(unorderedList) {
        const SORTED_LIST = unorderedList.sort((a, b) => a - b);

        return SORTED_LIST;
    }

    static sortListBidimensional(unorderedList, i) {
        let sortedList = [];

        if (i === 1)
            sortedList = unorderedList.sort((a, b) => b[i] - a[i]);

        return sortedList;
    }

    static calculateMedian(unorderedList) {
        const SORTED_LIST = this.sortList(unorderedList);
        const IS_ODD = this.isOdd(SORTED_LIST);
        const IS_EVEN = this.isEven(SORTED_LIST);
        let median = 0;

        if (IS_ODD) {
            const HALF_ODD = Math.floor(SORTED_LIST.length / 2);

            median = SORTED_LIST[HALF_ODD];
        }

        if (IS_EVEN) {
            const FIRST_HALF = Math.floor(SORTED_LIST.length / 2);
            const SECOND_HALF = FIRST_HALF - 1;
            const LIST_HALVES = [SORTED_LIST[FIRST_HALF], SORTED_LIST[SECOND_HALF]];

            median = this.getAverage(LIST_HALVES);
        }

        return median;
    }

    static calculateMode(list) {
        const COUNTER_LIST = {};

        for (const ITEM of list) {
            (ITEM in COUNTER_LIST)
                ? COUNTER_LIST[ITEM] += 1
                : COUNTER_LIST[ITEM] = 1;
        }

        const LIST_ARRAY = Object.entries(COUNTER_LIST);
        const LAST_SORTED_LIST = LIST_ARRAY[0].length - 1;
        const SORTED_LIST = this.sortListBidimensional(LIST_ARRAY, LAST_SORTED_LIST);
        const MODE = SORTED_LIST[0][0];

        return MODE;
    }
}