package main

import "fmt"

func main() {
	a := []int{1, 2, 3}
	fmt.Println("cap(a):", cap(a), ", len(a):", len(a)) // 3, 3
	b := a
	b[0] = 4
	fmt.Println(a) // [4 2 3]

	b = append(b, 5)
	fmt.Println("cap(a):", cap(a), ", len(a):", len(a)) // 3, 3
	fmt.Println("cap(b):", cap(b), ", len(b):", len(b)) // 6, 4
	fmt.Println(a)                                      // [4 2 3]
	fmt.Println(b)                                      // [4 2 3 5]
}
