import heapq

def solution(scoville, K):
    scoville.sort()
    a_ = 0
    while scoville[0] < K:
        if len(scoville) <= 1:
            return -1
        s1 = scoville[0]
        s2 = scoville[1]
        scoville.pop(0)
        scoville.pop(0)
        new = s1+(s2*2)
        scoville.insert(0,new)
        scoville.sort()
        a_+=1
    return a_

