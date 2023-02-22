#include <iostream>
#include <memory>

using namespace std;

class MyClass {
public:
    MyClass() {
        cout << "Constructor invoked" << endl;
    }
    ~MyClass() {
        cout << "Destructor invoked" << endl;
    }
};

int main() {
    /**
     * unique_ptr
     */
    unique_ptr<int>unPtr1 = make_unique<int>(25);
    unique_ptr<int>unPtr2 = move(unPtr1);
    cout << *unPtr2 << endl;

    {
        unique_ptr<MyClass>unPtr3 = make_unique<MyClass>();
    }

    /**
     * shared_ptr
     */
    cout << "=================" << endl;
    {
        shared_ptr<MyClass>shPtr1 = make_shared<MyClass>();
        cout << "Shared count: " << shPtr1.use_count() << endl;
        {
            shared_ptr<MyClass>shPtr2 = shPtr1;
            cout << "Shared count: " << shPtr1.use_count() << endl;
        }
        cout << "Shared count: " << shPtr1.use_count() << endl;
    }

    /**
     * weak_ptr
     */
    cout << "=================" << endl;
    weak_ptr<int> wePtr1;
    {
        shared_ptr<int>shPtr4 = make_shared<int>(25);
        wePtr1 = shPtr4;
        cout << "Shared count: " << wePtr1.use_count() << endl;
    }
    cout << "Shared count: " << wePtr1.use_count() << endl;

    cout << "end" << endl;
    return 0;
}
