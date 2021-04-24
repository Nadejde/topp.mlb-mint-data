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