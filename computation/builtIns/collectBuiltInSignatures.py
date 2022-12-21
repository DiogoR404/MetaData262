arr = ["5", "6", "8", "9","10","11"]
for i in arr:
    f = open('./../../resources/standards/html'+i,"r")
    lines = f.readlines()
    s=''
    x=0
    if (i =="9")|(i=="10")|(i=="11"):
        m=3
    else:
        m=2
    for l in lines:
        if '<span class="secnum"' in l:
            #print(len(l.split('</a></span>')))
            if  len(l.split('<span class="secnum"')[1].split('</span>'))>1:
                if 'TheGlobalObject\n' == l.split('<span class="secnum"')[1].split('</span>')[1].replace(" ", "").replace("</a>",""):
                    print(x)
                    x=x+1
            if x>=m:
                if ('(' in l.split('</span>')[1]) & ("<span" not in l.split('</span>')[1]):
                    s=s+l.split('</span>')[1].split('</h1>')[0].replace("</i>","").replace("<i>","")
    f.close()
    w = open("results/functions/functions_"+i+".txt", "w")
    w.write(s)
    w.close()
