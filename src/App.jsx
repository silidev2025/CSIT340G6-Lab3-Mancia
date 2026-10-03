const Header = (props) => {
  return (
    <header className="card-header">
      <p className="eyebrow">Course Information</p>
      <h1>{props.course.name}</h1>
    </header>
  )
}

const Part = (props) => {
  return (
    <p className="part">
      <span className="part-name">{props.part.name}</span>
      <span className="part-units">{props.part.units} units</span>
    </p>
  )
}

const Content = (props) => {
  return (
    <div className="content">
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  const total = parts[0].units + parts[1].units + parts[2].units

  return (
    <p className="total">
      <span>Total units</span>
      <span className="part-units">{total} units</span>
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
  const course = {
    name: 'CSIT340',
    parts: [
      {
        name: 'IT317',
        units: 3
      },
      {
        name: 'IT365 Data Analytics 1',
        units: 3
      },
      {
        name: 'RIZAL031 Life and Works of Rizal',
        units: 3
      }
    ]
  }

  const name = 'Francis Dave P. Mancia'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div className="page">
      <main className="card">
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </main>
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
