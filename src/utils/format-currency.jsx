export const formatPrice = (selectedCountry, price, currencyCode)=>{
    let USDollar = new Intl.NumberFormat(`en-${selectedCountry}`, {
        style: 'currency',
        currency: currencyCode,
    });  
    return USDollar.format(price)
}