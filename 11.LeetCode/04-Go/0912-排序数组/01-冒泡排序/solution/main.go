// 时间：5'34"
package main

import "fmt"

func BubbleSort(nums []int) {
	n := len(nums)
	swapFlag := true
	for i := 0; i < n && swapFlag; i++ {
		swapFlag = false
		for j := 0; j < n-1-i; j++ {
			if nums[j] > nums[j+1] {
				nums[j], nums[j+1] = nums[j+1], nums[j]
				swapFlag = true
			}
		}
	}
}

func main() {
	nums := []int{3, 2, 8, 5, 4, 7, 1}
	fmt.Println(nums)
	BubbleSort(nums)
	fmt.Println(nums)
}
