const words = ['ДВИГУН', 'АВТОМОБІЛЬ', 'БЛОГЕР', 'ТЕЛЕФОН', 'КЕТЧУП'];
const randomUkranianWord = () => {
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
};
export default randomUkranianWord;
