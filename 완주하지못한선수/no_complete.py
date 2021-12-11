def solution(participant, completion):
    p = sorted(participant)
    c = sorted(completion)
    for i in range(len(p)-1):
        if p[i] != c[i]:
            return p[i]
    return p[-1]

print(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))