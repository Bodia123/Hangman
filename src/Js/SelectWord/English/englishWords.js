const words = ['Floor', 'Car', 'Bloger', 'Phone', 'Tomato'];
const randomEnglishWord = () => {
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
};
export default randomEnglishWord;
