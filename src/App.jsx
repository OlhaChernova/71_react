// Импортируем компонент Button для его дальнейшего использования
// import Button from "./components/Button/Button";

// Импорты лекций
// import Lesson02 from "./lessons/Lesson02/Lesson02";
// import Lesson03 from "./lessons/Lesson03/Lesson03";
// import Lesson04 from "./lessons/Lesson04/Lesson04";
// import Lesson05 from "./lessons/Lessons05/Lessons05";

// Импорты домашних работ
// import Homework02 from "./homeworks/Homework02/Homework02";
// import Homework03 from "./homeworks/Homework03/Homework03";
// import Homework04 from "./homeworks/Homework04/Homework04";
import Homework05 from "./homeworks/Homework05/Homework05";

function App() {
  return (
    <>
      {/* Вызываем компонент Button для того, чтобы он вернул 
      JSX и наша кнопка отобразилась на странице*/}
      {/* <div className="button-container">
        <Button />
      </div> */}

      {/* Лекция 2 */}
      {/* <Lesson02 /> */}
      {/* <Homework02 /> */}

      {/* Лекция 3 */}
      {/* <Lesson03 /> */}
      {/* <Homework03 /> */}

      {/* Лекция 4 */}
      {/* <Lesson04 /> */}
      {/* <Homework04 /> */}

      {/* Лекция 5 */}
      {/* <Lesson05 /> */}
      <Homework05 />
    </>
  );
}

export default App;
