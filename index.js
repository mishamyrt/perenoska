export default (inputText) => {
    const RusA = '[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]'
    const RusV = '[аеёиоуыэю\я]'
    const RusN = '[бвгджзклмнпрстфхцчшщ]'
    const RusX = '[йъь]'
    const Hyphen = '\xAD'
    const regExps = [
        new RegExp('(' + RusX + ')(' + RusA + RusA + ')', 'ig'),
        new RegExp('(' + RusV + ')(' + RusV + RusA + ')', 'ig'),
        new RegExp('(' + RusV + RusN + ')(' + RusN + RusV + ')', 'ig'),
        new RegExp('(' + RusN + RusV + ')(' + RusN + RusV + ')', 'ig'),
        new RegExp('(' + RusV + RusN + ')(' + RusN + RusN + RusV + ')', 'ig'),
        new RegExp('(' + RusV + RusN + RusN + ')(' + RusN + RusN + RusV + ')', 'ig'),
        new RegExp('(' + RusA + '{1,5})' + Hyphen + '(' + RusA + '+)', 'ig')

    ]
    let outputText = inputText
    for (let i = 0; i < 5; i++) {
        outputText = outputText.replace(regExps[i], '$1' + Hyphen + '$2')
    }
    return outputText.replace(regExps[6], '$1$2')
}