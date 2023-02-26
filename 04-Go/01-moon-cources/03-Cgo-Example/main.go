package main

import (
	"fmt"
)

func main() {
	Seed(10)
	i := Random()
	fmt.Println("Hello ", i)
}
