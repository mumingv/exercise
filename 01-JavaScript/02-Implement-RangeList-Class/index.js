// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

/**
 * 
 * NOTE: Feel free to add any extra member variables/functions you like.
 */
class RangeList {

    constructor() {
        this.ranges = [];
    }

    /**
     *
     * Adds a range to the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    add(range) {
        if (range[0] >= range[1]) {
            return;
        }

        const newRange = [range[0], range[1]];

        let i = 0;
        while (i < this.ranges.length && this.ranges[i][1] < newRange[0]) {
            i++;
        }
    
        while (i < this.ranges.length && this.ranges[i][0] <= newRange[1]) {
            newRange[0] = Math.min(newRange[0], this.ranges[i][0]);
            newRange[1] = Math.max(newRange[1], this.ranges[i][1]);
            this.ranges.splice(i, 1);
        }
    
        this.ranges.splice(i, 0, newRange);
    }

    /**
     *
     * Removes a range from the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    remove(range) {
        if (range[0] >= range[1]) {
            return;
        }
      
        let i = 0;
        while (i < this.ranges.length && this.ranges[i][1] <= range[0]) {
            i++;
        }
      
        while (i < this.ranges.length && this.ranges[i][0] < range[1]) {
            const curRange = this.ranges[i];
      
            if (curRange[0] < range[0]) {
                this.ranges.splice(i, 1, [curRange[0], range[0]]);
                i++;
            }
      
            if (curRange[1] > range[1]) {
                this.ranges.splice(i, 1, [range[1], curRange[1]]);
            } else {
                this.ranges.splice(i, 1);
            }
        }
    }

    /**
     *
     * Convert the list of ranges in the range list to a string
     * @returns A string representation of the range list
     */
    toString() {
        let rangeStrings = this.ranges.map(range => `[${range[0]}, ${range[1]})`);
        console.log(rangeStrings.join(" "));
    }
}

// Example run
const rl = new RangeList();
rl.toString(); // Should be ""

rl.add([1, 5]);
rl.toString(); // Should be: "[1, 5)"

rl.add([10, 20]);
rl.toString(); // Should be: "[1, 5) [10, 20)"

rl.add([20, 20]);
rl.toString(); // Should be: "[1, 5) [10, 20)"

rl.add([20, 21]);
rl.toString(); // Should be: "[1, 5) [10, 21)"

rl.add([2, 4]);
rl.toString(); // Should be: "[1, 5) [10, 21)"

rl.add([3, 8]);
rl.toString(); // Should be: "[1, 8) [10, 21)"

rl.remove([10, 10]);
rl.toString(); // Should be: "[1, 8) [10, 21)"

rl.remove([10, 11]);
rl.toString(); // Should be: "[1, 8) [11, 21)"

rl.remove([15, 17]);
rl.toString(); // Should be: "[1, 8) [11, 15) [17, 21)"

rl.remove([3, 19]);
rl.toString(); // Should be: "[1, 3) [19, 21)"
