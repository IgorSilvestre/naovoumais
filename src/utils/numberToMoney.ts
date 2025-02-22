export default function numberToMoney (productPrice: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    return formatter.format(productPrice)
}
