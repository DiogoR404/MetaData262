import json

with open('dynamic_built-in_results.json', 'r') as f:
    bt = json.load(f)
b = bt['correct']
num = {}
for e in b:
    s = len(b[e].split(','))
    num[s] = num.get(s,0) + 1 
    if (s == 8):
        print('test262/'+e, b[e]) 

print(num)