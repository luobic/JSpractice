function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],  // pivot value is middle item
        i       = left,     // starts from left and goes right to pivot index
        j       = right;    // starts from right and goes left to pivot index


    // while the two indices don't match
    while (i <= j) {

        // if the item on the left is less than the pivot, continue right
        while (items[i] < pivot) {
            i++;
        }

        // if the item on the right is greater than the pivot, continue left
        while (items[j] > pivot) {
            j--;
        }

        // if the two indices still don't match, swap the values
        if (i <= j) {
            swap(items, i, j);

            // change indices to continue loop
            i++;
            j--;
        }
    }

    // this value is necessary for recursion
    return i;
}

/**
 * A quicksort implementation in JavaScript. The array
 * is sorted in place.
 * @param {Array} items An array of items to sort.
 * @return {Array} The sorted array.
 */
function quickSort(items, left, right) {

    var index;

    // performance - don't sort an array with zero or one items
    if (items.length > 1) {

        // fix left and right values - might not be provided
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        // split up the entire array
        index = partition(items, left, right);

        // if the returned index
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}
 var arr=[1,8,5,3,9];
 console.log(arr);
 quickSort(arr);
 console.log(arr);
