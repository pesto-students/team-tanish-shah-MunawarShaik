import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_API_KEY,
  dangerouslyAllowBrowser: true,
});
// console.log(openai);
const generateWorkoutPlan = async (userPreferences) => {
  try {
    console.log("in generate function ");
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates workout plans.",
        },
        {
          role: "user",
          content: `Generate a workout plan for a ${userPreferences.age}-year-old ${userPreferences.gender}, who's fitness level is ${userPreferences.fitnessLevel}, and want workout duration for ${userPreferences.workoutDuration} minutes.`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const workoutPlan = chatCompletion.choices[0].message.content;
    // console.log("this is workout plan response in gnrt fn ", workoutPlan);
    return workoutPlan;
  } catch (error) {
    console.error("Error generating workout plan:", error);
    throw error;
  }
};

export { generateWorkoutPlan };
