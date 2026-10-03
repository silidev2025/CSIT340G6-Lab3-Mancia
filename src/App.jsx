const Header = (props) => {
  return (
    <header className="card-header">
      <p className="eyebrow">Course Information</p>
      <h1>{props.course}</h1>
    </header>
  )
}

const Content = (props) => {
  return (
    <div className="content">
      <p className="part">
        <span className="part-name">{props.part1}</span>
        <span className="part-units">{props.units1} units</span>
      </p>
      <p className="part">
        <span className="part-name">{props.part2}</span>
        <span className="part-units">{props.units2} units</span>
      </p>
      <p className="part">
        <span className="part-name">{props.part3}</span>
        <span className="part-units">{props.units3} units</span>
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p className="total">
      <span>Total units</span>
      <span className="part-units">{props.total} units</span>
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer className="footer">
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340'
  const part1 = 'IT317'
  const units1 = 3
  const part2 = 'IT365 Data Analytics 1'
  const units2 = 3
  const part3 = 'RIZAL031 Life and Works of Rizal'
  const units3 = 3

  const name = 'Francis Dave P. Mancia'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div className="page">
      <main className="card">
        <Header course={course} />
        <Content
          part1={part1}
          units1={units1}
          part2={part2}
          units2={units2}
          part3={part3}
          units3={units3}
        />
        <Total total={units1 + units2 + units3} />
      </main>
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
