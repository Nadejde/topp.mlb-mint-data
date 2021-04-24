fetch_param ={
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,ro;q=0.8",
        "if-modified-since": "Sat, 24 Apr 2021 20:16:06 GMT",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
    },
    "referrer": "https://topps.atomichub.io/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
};

i = 1
success = true
all_assets = []
while(success) {
    res = await fetch("https://wax.api.aa.atomichub.io/atomicassets/v1/assets?limit=1000&page="+i+"&collection_name=mlb.topps&schema_name=series1", fetch_param)
    json = await res.json()
    mapped = json.data.map(x => {return {asset_id: x.asset_id, minted_at_block: x.minted_at_block, minted_at_time: x.minted_at_time, name: x.name, template_id: x.template.template_id, template_mint: x.template_mint}})
    all_assets.push(...mapped)
    success = json.success
    i++
}

console.log(all_assets)

i = 1
success = true
all_templates = []
while(success) {
    res = await fetch("https://wax.api.aa.atomichub.io/atomicassets/v1/templates?limit=1000&page="+i+"&collection_name=mlb.topps&schema_name=series1", fetch_param)
    json = await res.json()
    all_templates.push(...json.data)
    success = json.success
    i++
    if(json.data.length === 0) break
}

JSON.stringify(all_templates)