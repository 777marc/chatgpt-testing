import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Find 10 star wars trivia questions in JSON format",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  try {
    const contents = JSON.parse(completion.choices[0].message.content);

    contents.forEach(function (item) {
      console.log(item.question);
    });
  } catch (error) {
    console.log("error:", error);
  }
}

main();
