// This script gets the results of the tests passed by each engine from `www.test262.report`
var fs = require('fs');

function getStats (path, date) {
  return fetch("https://test262.report/api/data", {
    "headers": {
      "accept": "application/json",
      "accept-language": "en-US,en;q=0.9,pt;q=0.8",
      "content-type": "application/json",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1"
    },
    "referrer": "https://test262.report/browse/language?engines=v8",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"query\":\"{ result(section: \\\""+ path +"\\\", date:\\\"" + date + "\\\") { date sha payload } }\"}",
    "method": "POST",
    "mode": "cors"
  }).then((res) => {return res.json();})
};



async function buildResults(path , date){
  let result = [];
  let json = await getStats(path, date);
  const children = json.data.result.payload.resultsData.children;

  for (i in children) {
    if (-1 != children[i].name.indexOf('.js')){
      result.push({'path': 'test' + children[i].fullPath, 'pass': children[i].results});
    } else {
      await new Promise(r => setTimeout(r, 200));
      console.log(children[i].fullPath);
      const recurse = await buildResults(children[i].fullPath.slice(1).replaceAll('/','-'), date)
      result = result.concat(recurse);
    }
  }
  return result;
}

// Call start
(async() => {
  let html = await fetch('https://test262.report').then(res => {return res.text();});
  let dateIndex = html.indexOf('?date=');
  let date = html.slice(dateIndex + 6, dateIndex + 16);

  let result = await buildResults('built-ins', date);
  console.log(result.length);
  result = result.concat(await buildResults('language', date));
  console.log(result.length);

  fs.writeFile('test262_report.json', JSON.stringify(result), 'utf8', err => {if (err) {console.log(err);}});
})();
