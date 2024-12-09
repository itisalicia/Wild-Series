import "./Programs.css";
import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((result) => result.json())
      .then((data) => {
        setPrograms(data);
      });
  }, []);

  return (
    <section className="program-container">
      {programs?.map((program: Program) => (
        <div key={program.id} className="program">
          <img src={program.poster} alt={program.title} />
          <h2>{program.title}</h2>
          <p>Synopsis : {program.synopsis}</p>
          <p>
            {program.country} - {program.year}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Programs;
