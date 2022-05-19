var inputEl = document.getElementById('question-text')
var submitEl = document.getElementById("submit");

// submit function
var submitHandler = function(event) {
    event.preventDefault();
    var content = inputEl.value.trim();
    console.log(content);
    if (content) {
        // saveSearch();
        generateAnswer();
        fetchCity(cityName);
        document.getElementById("answer-div").style.display = "block";
    } else {
        alert("plz ask question");
    }
};

var generateAnswer = function() {
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createAnswer({
  search_model: "ada",
  model: "curie",
  question: "which puppy is happy?",
  documents: ["Puppy A is happy.", "Puppy B is sad."],
  examples_context: "In 2017, U.S. life expectancy was 78.6 years.",
  examples: [["What is human life expectancy in the United States?","78 years."]],
  max_tokens: 5,
  stop: ["\n", "<|endoftext|>"],
});

}



