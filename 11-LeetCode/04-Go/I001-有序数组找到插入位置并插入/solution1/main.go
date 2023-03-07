package main

import "fmt"

func main() {
	nums := []int{1, 3, 5, 7, 9}
	target := 4
	fmt.Println(nums) // [1 3 5 7 9]
	pos := searchInsert(nums, target)

	newNums := []int{}
	newNums = append(newNums, nums[0:pos]...)
	newNums = append(newNums, target)
	newNums = append(newNums, nums[pos:]...)
	fmt.Println(nums)    // [1 3 5 7 9]
	fmt.Println(newNums) // [1 3 4 5 7 9]
}

func searchInsert(nums []int, target int) int {
	left, right := 0, len(nums)
	for left < right {
		mid := left + (right-left)/2
		if target < nums[mid] {
			right = mid
		} else if target > nums[mid] {
			left = mid + 1
		} else {
			return mid
		}
	}
	return left
}
