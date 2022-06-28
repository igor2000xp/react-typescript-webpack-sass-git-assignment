export const validateMessage = (message:string) => {
  const WRONG_MESSAGE = 'Поле “Сообщение” имеет минимальную длину в 10 символов и максимальную в 300';
  return  message.toString().length < 10 ||
  message.toString().length > 300 ?
    WRONG_MESSAGE : '';
}


