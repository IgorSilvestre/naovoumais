export default function fixDate (date: Date | string) {
    const fixedDate = new Date(date).toLocaleString('pt-BR').split(' ')
    return fixedDate[0]
}