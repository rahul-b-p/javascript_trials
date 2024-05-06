Baleno={
    model: 'hatch black',
    manufacturer: 'maruti',
    varient: ['Automatic','Varient']
}
Glanza={
    manufacturer: 'toyota'
}

Glanza.__proto__=Baleno
console.log(Glanza.model);