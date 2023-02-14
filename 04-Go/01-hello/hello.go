package main

import (
	"fmt"

	"github.com/mumingv/golib/leetcode"
	"github.com/mumingv/gotest"
)

func main() {
	message := gotest.TestHello("Jay")
	fmt.Println(message)

	list := leetcode.NewList([]int{1, 2, 3, 4, 5})
	list.Print()
	fmt.Println(list.Len())
}
