export const validateName = (name: string) => {

  let nameArray = name.trim().split(' ');
  let messageOut = '';

  messageOut = nameArray.length !== 2 ?
    '“Имя Фамилия” может состоять только из 2-х слов (имя и фамилия) латинского алфавита'
    : checkLength(nameArray);

  if (nameArray.length === 2) {
    messageOut = (latin(nameArray[0]) === '' && latin(nameArray[1]) === '') ?
      messageOut :
      '"Имя Фамилия” может состоять только букв латинского алфавита';
  }
    return messageOut;
};


function latin(word:string):string {
  if (word) {
    let wordArray = word.split('');
    let acc = '';

    wordArray.forEach((el) => {
      acc = el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91 ? '' : el.charCodeAt(0).toString();
    })

    return acc;

  } else {
    return '';
  }
}

function checkLength(nameArray:Array<string>) {
  return nameArray[0].length < 3 ||
  nameArray[1].length < 3 ||
  nameArray[0].length > 30 ||
  nameArray[1].length > 30 ?
    'Минимальная длина каждого слова 3 символа, максимальная 30' : '';
}
