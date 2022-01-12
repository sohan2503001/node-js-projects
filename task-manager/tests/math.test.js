const {calculte,fahrenheitToCelsius,celsiusToFahrenheit} = require('../src/math')

// test('Should Calculate', () => {
//     const total  = calculte(10, .3)
//     expect(total).toBe(13)
// })

// test('Default tip', () => {
//     const total = calculte(10)
//     expect(total).toBe(12.5)
// })

test('F to C' , () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('C to F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

