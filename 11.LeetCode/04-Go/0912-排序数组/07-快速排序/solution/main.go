package main

import "fmt"

func QuickSort(nums []int, low, high int) {
	if low >= high {
		return
	}
	p := partition(nums, low, high)
	QuickSort(nums, low, p-1)
	QuickSort(nums, p+1, high)
}

func partition(nums []int, low, high int) int {
	mid := low + (high-low)/2
	nums[mid], nums[high] = nums[high], nums[mid]
	slow := low
	for fast := low; fast < high; fast++ {
		if nums[fast] < nums[high] {
			nums[slow], nums[fast] = nums[fast], nums[slow]
			slow++
		}
	}
	nums[slow], nums[high] = nums[high], nums[slow]
	return slow
}

func main() {
	nums := []int{3, 2, 8, 5, 4, 7, 1}
	fmt.Println(nums)
	QuickSort(nums, 0, len(nums)-1)
	fmt.Println(nums)
}
