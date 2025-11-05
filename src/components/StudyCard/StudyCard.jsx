import Button from "../Button/Button";
import "./styles.css";

function StudyCard({lessonData}) {
  return (
    <div className="study-card-wrapper">
      <h3>Lessson {lessonData.lesson_number}</h3>
      <p>{lessonData.topic}</p>
      <p>{lessonData.name}</p>
      <img src={lessonData.imgSrc}/>
      <Button name="view" type="button" variant="purple"/>
    </div>
  );
}

export default StudyCard;
