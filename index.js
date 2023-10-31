import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Find 10 marine corps trivia questions in JSON format",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  try {
    const contents = JSON.parse(completion.choices[0].message.content);
    //console.log(contents.questions);
    contents.questions.forEach(function (item) {
      console.table(item);
    });
  } catch (error) {
    console.log("error:", error);
  }
}

main();
