def find_available_slots(schedules, duration):
    """
    Find all available time slots for scheduling a meeting.

    Args:
    schedules (dict): A dictionary of schedules where keys are people's names
                    and values are lists of tuples representing busy intervals.
    duration (int): Duration of the meeting in hours.

    Returns:
    list: A list of integers representing the start times of available slots.
    """

    busy_intervals = []
    merged_intervals = []
    free_intervals = []
    results = []
    open = 8
    close = 17

    # 1 - flatten into single schedule
    for intervals in schedules.values():
        busy_intervals.extend(intervals)

    # 2 - merge overlapping schedules
    busy_intervals.sort()

    for start, end in busy_intervals:
        # check if key is available and meeting start hour is valid
        if not merged_intervals or merged_intervals[-1][1] < start:
            # no overlap
            merged_intervals.append((start, end))
        else:
            # overlap - use the ending hour
            # to cover the furthest overlapping range
            merged_intervals[-1] = (merged_intervals[-1][0],
                                    max(merged_intervals[-1][1], end))

    # 3 - find available hours (inverse of busy_intervals)
    for start, end in merged_intervals:
        if open < start:
            free_intervals.append((open, start))
        open = max(open, end)

    if open < close:
        free_intervals.append((open, close))

    # 4 - filter slots that fit meeting duration
    for start, end in free_intervals:
        potential_start = start

        while potential_start + duration <= end:
            results.append(potential_start)
            potential_start += 1

    return results


schedule = {
    'Alice': [(8, 10), (13, 14)],
    'Bob': [(9, 11), (14, 15)],
}

MEETING_DURATION = 2
print(find_available_slots(schedule, MEETING_DURATION))
