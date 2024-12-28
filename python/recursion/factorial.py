def factorial(n):
    if n == 1:
        return 1

    return n * factorial(n - 1)


print(factorial(1))  # 1
print(factorial(2))  # 2
print(factorial(3))  # 6
print(factorial(4))  # 24
print(factorial(5))  # 120
print(factorial(6))  # 720

