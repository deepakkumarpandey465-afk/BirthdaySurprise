
import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [letterOpened, setLetterOpened] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [candlesLit, setCandlesLit] = useState(false);
const [cakeCut, setCakeCut] = useState(false);
  const questions = [
    {
      question: "Sabse zyada bakbak kaun karta hai? 😂",
      options: ["Main 😎", "Tum 😂", "Dono equally 🤝"],
      message: "Lagta hai silence tumhari friendship dictionary mein hai hi nahi! 😂"
    },
    {
      question: "Agar dono bore ho rahe ho toh kya karoge?",
      options: ["Random baatein", "Ek dusre ki taang kheechna", "Kuch bhi pagalpan 😂"],
      message: "Boredom ho ya kuch bhi, masti honi chahiye! 😜"
    },
    {
      question: "Kaun zyada late reply karta hai?",
      options: ["Main 📱", "Tum 🙄", "Dono ka record kharab hai 😂"],
      message: "Reply late ho sakta hai, friendship nahi! 😂"
    },
    {
      question: "Friendship ka sabse important rule?",
      options: ["Trust 🤝", "Masti 😂", "Har situation mein support 🌸"],
      message: "Correct answer: Ye teeno hi zaroori hain! ❤️"
    },
    {
      question: "Aage bhi aisi hi friendship rahegi na?",
      options: ["Obviously! ❤️", "Bilkul! 🥳", "Ismein bhi koi doubt hai? 😎"],
      message: "Bas isi answer ka intezaar tha! 🥳"
    }
  ];

  const currentQuestion = questions[questionIndex];

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer("");
    } else {
      setPage("result");
    }
  };

  const resetQuiz = () => {
    setQuestionIndex(0);
    setSelectedAnswer("");
    setPage("quiz");
  };



const playBirthdayTune = () => {
  const birthdaySong = new Audio("/birthday-song.mp3");

  birthdaySong.volume = 1;

  birthdaySong.play().catch((error) => {
    console.error("Song could not play:", error);
    alert("Song play nahi ho paaya. Please MP3 file check karo.");
  });
};




  return (
    <div className="birthday-container">

      <div className="floating-star star-one">✦</div>
      <div className="floating-star star-two">✧</div>
      <div className="floating-star star-three">♡</div>
      <div className="floating-star star-four">✦</div>

      {page === "home" && (
        <div className="birthday-card">

          <div className="top-icon">🎀</div>

          <p className="small-heading">
            A LITTLE SURPRISE FOR YOU
          </p>

          <h1>
            Hey, <span>Birthday Butkiiiii </span>
          </h1>

          <p className="description">
            Today is all about celebrating you,
            your beautiful smile and the amazing
            person you are.
          </p>

          <div className="cake">🎂</div>

          <p className="friendship-text">
            Because good friends deserve
            beautiful surprises!
          </p>

          <button
            className="surprise-button"
            onClick={() => setPage("funzone")}
          >
            Open Your Surprise 🎁
          </button>

          <p className="footer-text">
            Made with friendship & lots of memories ♡
          </p>

        </div>
      )}

      {page === "funzone" && (
        <div className="memories-section">

          <p className="small-heading">
            LET THE FUN BEGIN
          </p>

          <h1>
            Friendship <span>Fun Zone 😂</span>
          </h1>

          <p className="description">
            Birthday hai, toh thodi masti toh banti hai!
            Let's see how well you handle this quiz.
          </p>

          <div className="funzone-grid">

            <div className="funzone-card">
              <div className="funzone-icon">😂</div>
              <h3>Friendship Quiz</h3>
              <p>Answer some funny questions about our friendship.</p>

              <button
                className="small-button"
                onClick={() => setPage("quiz")}
              >
                Play Quiz →
              </button>
            </div>

            <div className="funzone-card">
           <div className="funzone-icon">💌</div>
             <h3>Open When You Need a Smile</h3>
            <p>A little message to make your day brighter.</p>
          <button
    className="small-button"
    onClick={() => {
      setLetterOpened(false);
      setPage("letter");
    }}
  >
    Open Letter 💌
  </button>
</div>

            <div className="funzone-card">
  <div className="funzone-icon">🎁</div>
  <h3>Mystery Gift</h3>
  <p>Something special is waiting for you.</p>

  <button
    className="small-button"
    onClick={() => {
      setGiftOpened(false);
      setPage("gift");
    }}
  >
    Open Mystery Gift 🎀
  </button>
</div>

            <div className="funzone-card">
  <div className="funzone-icon">🎂</div>
  <h3>Birthday Cake Time!</h3>
  <p>Light the candles, make a wish and cut your birthday cake!</p>

  <button
    className="small-button"
    onClick={() => {
      setCandlesLit(false);
      setCakeCut(false);
      setPage("cake");
    }}
  >
    Celebrate Birthday 🎉
  </button>
</div>

          </div>

          <button
            className="surprise-button"
            onClick={() => setPage("home")}
          >
            ← Back to Birthday Page
          </button>

        </div>
      )}

        {page === "letter" && (
  <div className="letter-section">
    <p className="small-heading">A LITTLE MESSAGE FOR YOU</p>

    {!letterOpened ? (
      <div className="envelope-area">
        <div className="envelope">💌</div>
        <h1>You've Got a <span>Letter!</span></h1>
        <p className="description">
          Someone has written a little something for you.
        </p>
        <button
          className="surprise-button"
          onClick={() => setLetterOpened(true)}
        >
          Open My Letter 💗
        </button>
      </div>
    ) : (
      <div className="letter-paper">
        <div className="letter-heart">💗</div>
        <h1>Dear <span>Birthday Girl!</span></h1>

        <p>
          Sabse pehle, HAPPY BIRTHDAY! 🥳
        </p>

        <p>
          Life mein kuch log aise hote hain jo apni
          presence se normal days ko bhi special bana dete hain.
          Tum unhi logon mein se ek ho.
        </p>

        <p>
          Hamari random baatein, silly jokes aur unnecessary
          laughter — ye sab chhoti-chhoti cheezein hi toh
          friendship ko special banati hain. 😂
        </p>

        <p>
          Hamesha khush rehna, apne dreams follow karna
          aur apni smile kabhi mat khona.
        </p>

        <h3>Stay Awesome! 🌸</h3>
        <p className="letter-sign">Your Friend ❤️</p>

        <button
          className="surprise-button"
          onClick={() => setPage("funzone")}
        >
          Back to Fun Zone
        </button>
      </div>
    )}
  </div>
)}
      


        {page === "gift" && (
  <div className="gift-section">
    <p className="small-heading">A SPECIAL SURPRISE FOR YOU</p>

    {!giftOpened ? (
      <div className="gift-card">
        <div className="gift-box">🎁</div>

        <h1>Your <span>Mystery Gift!</span></h1>

        <p className="description">
          Ek special surprise tumhara wait kar raha hai.
          Ready ho? 😍
        </p>

        <button
          className="surprise-button"
          onClick={() => setGiftOpened(true)}
        >
          Unwrap Your Gift 🎀
        </button>
      </div>
    ) : (
      <div className="gift-card gift-reveal">
        <div className="gift-box">🎉</div>

        <h1>Surprise! <span>🥳</span></h1>

        <h2 className="gift-message">
          Your Gift Is...
        </h2>

        <div className="gift-content">
          <div className="gift-emoji">🌟</div>
          <h2>A Lifetime Supply of Happiness!</h2>
          <p>
            May your days be filled with laughter,
            your dreams turn into reality, and
            every new year bring you amazing opportunities.
          </p>
          <p>
            Aur haan, meri taraf se unlimited masti
            aur friendship ke bonus points! 😂❤️
          </p>
        </div>

        <button
          className="surprise-button"
          onClick={() => setPage("funzone")}
        >
          Back to Fun Zone
        </button>
      </div>
    )}
  </div>
)}


{page === "cake" && (
  <div className="cake-section">
    <p className="small-heading">BIRTHDAY CELEBRATION TIME</p>

    <h1>Make a <span>Wish! ✨</span></h1>

    <p className="description">
      Close your eyes, make a wish and get ready for the celebration!
    </p>

    {!cakeCut ? (
      <>
       


<div className="cake-photo-stage">
  <img
    src={cakeCut ? "/cut-cake.png" : "/whole-cake.png"}
    alt="Birthday cake"
    className={cakeCut ? "cake-photo cut-photo" : "cake-photo"}
  />

  {candlesLit && !cakeCut && (
    <div className="photo-candles">
      <span>🔥🕯️</span>
      <span>🔥🕯️</span>
      <span>🔥🕯️</span>
    </div>
  )}
</div>




        {!candlesLit ? (
          <button
            className="surprise-button"
            onClick={() => {
  setCandlesLit(true);
  playBirthdayTune();
}}
          >
            🕯️ Light the Candles
          </button>
        ) : (
          <>
            <p className="cake-wish">
              Make a wish! Your special moment is here. 💗
            </p>

            <button
              className="surprise-button"
              onClick={() => {
  setCakeCut(true);
}}
            >
              🔪 Cut the Cake! 🎂
            </button>
          </>
        )}
      </>
    ) : (
      <div className="cake-celebration">
        <img
  src="/cut-cake.png"
  alt="Cut birthday cake"
  className="cake-photo celebration-cake"
/>
        <div className="celebration-emoji">🎉🎂🎊</div>
        <h1>Happy Birthday! <span>🥳</span></h1>

        <p className="description">
          May your life always be filled with happiness,
          laughter, success and beautiful memories!
        </p>

        <div className="final-wish">
          Keep shining, keep smiling and keep being amazing! ❤️
        </div>

        <div className="celebration-emoji">✨🎈💗</div>

        <button
          className="surprise-button"
          onClick={() => setPage("funzone")}
        >
          Back to Fun Zone
        </button>
      </div>
    )}
  </div>
)}





      {page === "quiz" && (
        <div className="quiz-section">

          <p className="small-heading">FRIENDSHIP CHALLENGE 😂</p>

          <h1>
            Let's <span>Play a Quiz!</span>
          </h1>

          <p className="quiz-progress">
            Question {questionIndex + 1} of {questions.length}
          </p>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${((questionIndex + 1) / questions.length) * 100}%`
              }}
            ></div>
          </div>

          <h2 className="quiz-question">
            {currentQuestion.question}
          </h2>

          <div className="quiz-options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`quiz-option ${
                  selectedAnswer === option ? "selected" : ""
                }`}
                onClick={() => setSelectedAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedAnswer && (
            <div className="quiz-feedback">
              <p>Good choice! 😄</p>
              <p>{currentQuestion.message}</p>
            </div>
          )}

          <button
            className="surprise-button"
            disabled={!selectedAnswer}
            onClick={nextQuestion}
          >
            {questionIndex === questions.length - 1
              ? "See Final Surprise 🎉"
              : "Next Question →"}
          </button>

        </div>
      )}

      {page === "result" && (
        <div className="birthday-card">

          <div className="top-icon">🏆</div>

          <p className="small-heading">QUIZ COMPLETED</p>

          <h1>
            You're a <span>Friendship Star!</span>
          </h1>

          <div className="cake">🥳</div>

          <p className="description">
            Congratulations! You have successfully
            completed this totally serious and
            extremely important friendship quiz. 😂
          </p>

          <p className="friendship-text">
            Keep smiling, keep laughing and keep being awesome!
          </p>

          <button
            className="surprise-button"
            onClick={resetQuiz}
          >
            Play Again 🔄
          </button>

          <br /><br />

          <button
            className="text-button"
            onClick={() => setPage("funzone")}
          >
            Back to Fun Zone
          </button>

        </div>
      )}

    </div>
  );
}

export default App;
