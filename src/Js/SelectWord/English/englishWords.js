const words = [
  'Floor',
  'Car',
  'Bloger',
  'Phone',
  'Tomato',
  'time',
  'information ',
  'people ',
  'thing ',
  'community ',
  'man ',
  'woman ',
  'way ',
  'life ',
  'child ',
  'world ',
  'school ',
  'state ',
  'family ',
];
const randomEnglishWord = () => {
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
};
export default randomEnglishWord;
