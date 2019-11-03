const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {
  DataSupplier.registerDataSupplier('public.text', 'Dad Jokes', 'SupplyData')
}

export function onShutdown () {
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyData (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)

  items.forEach((item, index) => {
    fetch('https://icanhazdadjoke.com', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Sketch Dad Jokes (https://islovely.co/projects/sketch-dadjokes)'
      }
    }).then(response => response.json()).then(({ joke }) => {
      DataSupplier.supplyDataAtIndex(dataKey, joke, index)
    })
  }).catch(error => {
    log(error)
  })
}
