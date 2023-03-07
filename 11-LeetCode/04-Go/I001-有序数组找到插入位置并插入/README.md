- 从一个切片构造一个新的切片，需要新建一个切片空间。
    - 第1种解法：
	    newNums := []int{}
    - 第2种解法：
	    newNums := append([]int{target}, nums[pos:]...)
- 下面这种写法并未创建一个新的切片，所以会直接修改原切片，从而导致元素5丢失。
	    newNums := append(nums[0:pos], target) // [1 3 5 7 9] -> [1 3 4 7 9]

