def natural_numbers(lowerRange, upperRange):
    if lowerRange > upperRange:
        return

    print(lowerRange)

    natural_numbers(lowerRange + 1, upperRange)


print(natural_numbers(1, 5))
