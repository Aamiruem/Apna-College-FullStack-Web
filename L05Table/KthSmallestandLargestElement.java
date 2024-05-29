// Time Complexity: O(n^2) 
// The worst-case time complexity of the above solution is still O(n2
// Auxiliary Space: O(1)

import java.util.*;

public class KthSmallestandLargestElement {
    public static int kthsmallest(int arr[], int l, int r, int k) {
        if (k > 0 && k <= r - l + 1) {
            int pos = randomPartition(arr, l, r);

            if (pos - l == k - 1) {
                return arr[pos];
            }
            if (pos - l > k - 1) {
                return kthsmallest(arr, l, pos - 1, k);
            }
            return kthsmallest(arr, pos + 1, r, k - pos + l - 1);
        }
        return Integer.MAX_VALUE;
    }

    public static void swap(int arr[], int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static int partition(int arr[], int l, int r) {
        int x = arr[r], i = l;
        for (int j = l; j < r; j++) {
            if (arr[j] <= x) {
                swap(arr, i, j);
                i++;
            }
        }
        swap(arr, i, r);
        return i;
    }

    public static int randomPartition(int arr[], int l, int r) {
        int n = r - l + 1;
        int pivot = l + (int)(Math.random() * n);
        swap(arr, pivot, r);
        return partition(arr, l, r);
    }

    public static void main(String[] args) {
        int arr[] = {10, 4, 5, 8, 6, 3};
        int n = arr.length;
        int k = 3;

        System.out.println(k + "'th smallest element is " + kthsmallest(arr, 0, n - 1, k));
    }
}
