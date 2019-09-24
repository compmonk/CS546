const questionOne = function questionOne(arr) {
		var result = 0
    for (var i = 0; i < arr.length; i++) {
      result += arr[i] * arr[i];
    }
    return result;
}

const questionTwo = function questionTwo(num) {
    if (num < 1) {
      return 0;
    }
    else if (num == 1) {
      return 1;
    }
    return questionTwo(num - 1) + questionTwo(num - 2);
}

const questionThree = function questionThree(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelsCount = 0
    for (var i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
        vowelsCount += 1
      }
    }
    return vowelsCount;
}

const questionFour = function questionFour(num) {
    if (num < 0) {
      return null;
    }
    else if (num == 0) {
      return 1;
    }
    return num * questionFour(num - 1);
}

module.exports = {
    firstName: "ZUBAIR",
    lastName: "SHAIKH",
    studentId: "10444383",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
