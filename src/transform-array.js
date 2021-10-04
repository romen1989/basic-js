import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let resultArray = [];
  let j = 0;
  if (Array.isArray(arr)) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (i !== (arr.length - 1)) {
        resultArray.push(arr[i+1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i !== 0 && arr[i - 2] !== '--discard-next') {
        resultArray.push(arr[i-1]);
      }  
    } else if (arr[i] === '--discard-prev') {
      if (i !== 0 && arr[i - 2] !== '--discard-next') {
        resultArray.pop();
      }  
    } else if (arr[i] === '--discard-next') {
      if (i !== (arr.length - 1)) {
        i++;
      }  
    } else {
      resultArray.push(arr[i]);
    }
  }} else throw new Error ('\'arr\' parameter must be an instance of the Array!');
  return resultArray;
}
