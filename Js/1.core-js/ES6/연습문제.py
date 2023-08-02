import sys
list1=[]
while(True):
    words=sys.stdin.readline().strip('\n')
    if len(words)==0:
        break
    else:list1.append(words)

for w in list1:
    print(w)

