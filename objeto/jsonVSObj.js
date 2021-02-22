const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(obj)
console.log(JSON.stringify(obj)) //converte em JSON

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) //converte do JSON ao normal
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e":[] }'))