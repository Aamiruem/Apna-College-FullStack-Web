// Time Complexity: O(n)
// Auxiliary Space: O(1)

import java.util.*;

// Java program to find the minimum and maximum elements in an array by comparing pairs
public class MinMaxCompairingPairs {

    /* Class Pair is used to return two values from getMinMax() */
    static class Pair {
        int min;
        int max;
    }

    static Pair getMinMax(int arr[], int n) {
        Pair minmax = new Pair();
        int i;

        /* If array has an even number of elements, initialize the first two elements as min and max */
        if (n % 2 == 0) {
            if (arr[0] > arr[1]) {
                minmax.max = arr[0];
                minmax.min = arr[1];
            } else {
                minmax.min = arr[0];
                minmax.max = arr[1];
            }
            i = 2; // Set the starting index for loop
        } else {
            /* If array has an odd number of elements, initialize the first element as min and max */
            minmax.min = arr[0];
            minmax.max = arr[0];
            i = 1; // Set the starting index for loop
        }

        /* In the while loop, pick elements in pairs and compare the pair with min and max so far */
        while (i < n - 1) {
            if (arr[i] > arr[i + 1]) {
                if (arr[i] > minmax.max) {
                    minmax.max = arr[i];
                }
                if (arr[i + 1] < minmax.min) {
                    minmax.min = arr[i + 1];
                }
            } else {
                if (arr[i + 1] > minmax.max) {
                    minmax.max = arr[i + 1];
                }
                if (arr[i] < minmax.min) {
                    minmax.min = arr[i];
                }
            }
            i += 2; // Increment the index by 2 as two elements are processed in loop
        }

        return minmax;
    }

    /* Driver program to test above function */
    public static void main(String args[]) {
        int arr[] = {1000, 11, 445, 1, 330, 3000};
        int arr_size = arr.length;
        Pair minmax = getMinMax(arr, arr_size);
        System.out.printf("Minimum element is %d\n", minmax.min);
        System.out.printf("Maximum element is %d\n", minmax.max);
    }
}
