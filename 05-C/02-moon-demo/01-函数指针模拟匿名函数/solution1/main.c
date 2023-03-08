#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int (*func)(int, int); // 函数指针
    func = add; // 将函数指针指向add函数

    int result = func(3, 4); // 调用函数指针
    printf("%d\n", result); // 输出结果

    return 0;
}
