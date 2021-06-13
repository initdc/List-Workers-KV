addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  
  String.prototype.rjust = function( length, char ) {
      var fill = [];
      while ( fill.length + this.length < length ) {
        fill[fill.length] = char;
      }
      return fill.join('') + this;
  }
  
  String.prototype.ljust = function( length, char ) {
      var fill = [];
      while ( fill.length + this.length < length ) {
        fill[fill.length] = char;
      }
      return this + fill.join('');
  }
  
  async function listKeys(namespace) {
    const value = await namespace.list()
  
    return value
  }
  
  async function getValue(namespace, key) {
    const value = await namespace.get(key)
    if (value === null) {
      return new Response('Value not found', {status: 404})
    }
  
    return value
  }
  
  async function handleRequest(request) {
    const list = await listKeys(SUB)
    let error = 'List has no keys'
    let base = '.example.com'
    let biggest = 20
    let output = new String
    let key = new String
    let value = new String
  
    if (list.keys.length > 0){
      const length = list.keys.length
      for (let i = 0 ; i < length; i++){
        key =  list.keys[i].name
        value = await getValue(SUB, key)
        output += (key + base).ljust(biggest, ' ') + value + '\n\n'
      }
      return new Response(output, {status: 200})
    }
  
    return new Response(error, {status: 404})
  }
  