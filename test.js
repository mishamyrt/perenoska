const hyphen = require('./index.js')

let text = 'Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Шеф взъярён тчк щипцы с эхом гудбай Жюль.'

const answer = 'Задача орга-низации, в особен-ности же посто-янное информа-цион-но-пропаган-дистское обеспе-чение нашей деятель-ности позво-ляет оценить значение систе-мы обучения кадров, соот-ветствует насущ-ным потребнос-тям. Шеф взъярён тчк щипцы с эхом гудбай Жюль.'

text = hyphen(text)
text = text.replace(new RegExp("\xAD",'ig'), '-')

if (text === answer) {
    console.log('Passed!');
} else {
    console.log('Not Passed!');
}
