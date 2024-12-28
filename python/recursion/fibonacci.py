def fib(n):
    if n < 2:
        return 1

    return fib(n - 1) + fib(n - 2)


print(fib(0))  # 1
print(fib(1))  # 1
print(fib(2))  # 2
print(fib(3))  # 3
print(fib(4))  # 5
print(fib(5))  # 8
print(fib(6))  # 13
print(fib(7))  # 21
print(fib(8))  # 34
print(fib(9))  # 55
