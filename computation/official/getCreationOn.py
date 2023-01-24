import json
import subprocess
import multiprocessing
import os
import tqdm

def getDate(test):
    currentDirectory = os.path.dirname(os.path.abspath(__file__))
    directory = '/'.join(currentDirectory.split('/')[:-2])+ '/resources/test262/'
    command = 'git log --follow --format="%cs" ' + test
    process = subprocess.Popen(command, cwd=directory, bufsize=512, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    output = ''
    try:
        output, error = process.communicate(timeout=6)
        output = output.decode("latin1").strip()
        error = error.decode("latin1").strip()
        if error: print('Error: ', error)
    except subprocess.TimeoutExpired:
        process.kill()
    return (test, output)

def getTestCreatedOn(metadata, history):
    meta  = metadata
    inputs = zip(meta)
    # with multiprocessing.Pool() as p:
    #     r = p.starmap(getDate, tqdm.tqdm(inputs, total=len(meta)))
    r = []
    for test in meta:
        r.append(getDate(test))
    for test in r:
        history[test[0]] = test[1].split('\n') 
        history[test[0]].reverse()
    with open('results/createdOn.json', 'w') as f:
        json.dump(history, f)

def main():
    with open('results/metadata_test262.json', 'r') as f:
        meta = json.load(f)
    with open('results/testChangeDates.json', 'r') as f:
        history = json.load(f)

    meta = [test['path'] for test in meta if history[test['path']] == [""]]
    getTestCreatedOn(meta, history)

if __name__ == '__main__':
    main()