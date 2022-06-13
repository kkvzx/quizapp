import React from "react";
import "./styles/App.css";
import { QuizApp } from "./components/QuizApp";
import { WelcomePage } from "./components/WelcomePage";

export const App = () => {
  const [start, setStart] = React.useState(false);

  const startToggle = () => {
    setStart((prev) => !prev);
  };

  return (
    <div className="appWrapper">
      <div className="app">
        {start ? <QuizApp /> : <WelcomePage startToggle={startToggle} />}
      </div>
    </div>
  );
};

// Aplikacja składa się ze strony tytułowej i strony QuizApp gdzie odbywa się praca programu.
// Quiz app pobiera dane z bazy i na ich podstawie tworzy komponenty (5 bloków pytan + odpowiedzi), odbywa się w niej również sprawdzanie poprawności oraz weryfikacja tego czy odpowiedzi są zaznaczone, a także reset całego programu.
// SingleQuestion.tsx to pojedynczy blok, który tworzy na podstawie przekazanych mu danych bloki z odpowiedziami (2-4).
// BtnComponent.tsx to każda z odpowiedzi.
// Praca programu odbywa się w elemencie QuizApp.tsx na podstawie danych dostarczonych do niego z BtnComponent.tsx (przesyłam do każdego z guzików funkcję edytującą state znajdujące się w QuizApp)
