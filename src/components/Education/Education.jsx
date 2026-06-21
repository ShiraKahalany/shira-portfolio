import Reveal from '../Reveal'
import { education } from '../../data/education'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Academic foundation</h2>
        </Reveal>

        <Reveal className="education__card glass">
          <div className="education__main">
            <div className="education__info">
              <h3 className="education__degree">{education.degree}</h3>
              <p className="education__school">{education.school}</p>
              <p className="education__focus">{education.focus}</p>
            </div>

            <div className="education__gpa">
              <span className="education__gpa-value">{education.gpa}</span>
              <span className="education__gpa-label">GPA</span>
            </div>
          </div>

          <div className="education__coursework">
            <span className="education__coursework-label">Selected Coursework</span>
            <div className="education__coursework-grid">
              {education.coursework.map((course) => (
                <div key={course.name} className="education__course">
                  <span className="education__course-name">{course.name}</span>
                  <span className="education__course-score">{course.score}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
