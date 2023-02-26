const affirmations = [
    "You are capable of achieving great things.",
    "You are loved and valued.",
    "You have the power to create the life you want.",
    "You are worthy of happiness and success.",
    "You have the strength to overcome any challenge.",
    "You are a unique and special individual.",
    "You are making a positive impact on the world.",
    "You are deserving of all the good things in your life.",
    "You are beautiful, both inside and out.",
    "You have the ability to learn and grow every day.",
  ];
  const dailyQuotes = [
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The secret of getting ahead is getting started. - Mark Twain",
  ];
  const funnyOneLiners = [
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I used to be indecisive. Now I'm not sure.",
    "I told a chemistry joke, but there was no reaction.",
    "What do you call an alligator in a vest? An investigator.",
    "I'm reading a book on the history of glue. I just can't seem to put it down.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "I'm on a whiskey diet. I've lost three days already.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
  ];

  let data = [affirmations,dailyQuotes,funnyOneLiners];

  const randomNumber = (number) => {
    return Math.floor(Math.random()*number);
  }


  
  const createMessage = () => {
    let messageArray = [];
    let message = "";

    data.forEach(element => {
        const randomMessage = element[randomNumber(element.length)];
        message += `${randomMessage}\n`;
    });
        console.log(message);
  }

createMessage();