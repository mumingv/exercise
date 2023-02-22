#include <iostream>
#include <cstdlib>

using namespace std;

int main() {
    srand(time(nullptr));
    int number = rand() % 10;
    cout << number << ", " << time(0);

    return 0;
}
