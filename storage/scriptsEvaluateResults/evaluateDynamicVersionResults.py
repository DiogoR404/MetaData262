######################################################################################
# script to compare results with test262.report
# this script was not update with the project and might not be up to date
######################################################################################
import json

with open('results/test262_report.json', 'r') as f:
    reportJson = json.load(f)
    notSupReport = list(
        map(
            lambda x: x['path'],
            filter(
                lambda test: 0 < len(list(
                    filter(
                        lambda y: 'v8' == y.get('host') and not y.get('pass'),
                        test['pass']))),
                 reportJson)))
print('Not Supported == ', len(notSupReport))

with open('../../computation/main/results/metadata_miguel.json', 'r') as f:
    notSupMiguel = list(map(lambda x: x['path'][15:], filter(lambda x: x.get('version'), json.load(f))))

print('Not Supported Miguel == ', len(notSupMiguel))

flags = lambda x: 'flags' in x and 'async' in x['flags']
negative = lambda x: 'negative' not in x or x['negative']['type'] != 'SyntaxError'

with open('../../computation/version/results/result.json', 'r') as f:
    notSupported = json.load(f)['notSupported']

def getToReview(mine, expected, listFilters, b = False):
    for f in listFilters:
        mine = list(filter(f, mine))
    print('Selected == ', len(mine))
    return list(filter( lambda x: x['path'] in expected and b, mine))

listFilters = [negative]
shouldReview = getToReview(notSupported, notSupMiguel, listFilters, True)
print('Need Review == ', len(shouldReview))
print(json.dumps(shouldReview[0], indent=4))
