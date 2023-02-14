package main

import (
	"github.com/mumingv/golib/leetcode"
)

type ListNode = leetcode.ListNode

func reverseList(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}

	var pre *ListNode = nil
	p := head
	for p != nil {
		temp := p.Next
		p.Next = pre
		pre = p
		p = temp
	}
	return pre
}

func main() {
	a := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	list := leetcode.NewList(a)
	list.Print()
	list = reverseList(list)
	list.Print()
}
