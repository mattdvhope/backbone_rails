function words(phrase) {
  var word_counts = {},
      word_list = phrase.replace(/\n|\t|\s+/g, " ").split(" ");

  word_list.forEach(function(word) {
    if (typeof word_counts[word] !== "number") { word_counts[word] = 0; }
    word_counts[word]++;
  });

  return word_counts;
}