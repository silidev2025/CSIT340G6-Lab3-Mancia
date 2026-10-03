const Header = (props) => {
  return (
    <header className="card-header">
      <p className="eyebrow">Course Information</p>
      <h1>{props.course}</h1>
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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
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
  const part1 = {
    name: 'IT317',
    units: 3
  }
  const part2 = {
    name: 'IT365 Data Analytics 1',
    units: 3
  }
  const part3 = {
    name: 'RIZAL031 Life and Works of Rizal',
    units: 3
  }

  const name = 'Francis Dave P. Mancia'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div className="page">
      <main className="card">
        <Header course={course} />
        <Content part1={part1} part2={part2} part3={part3} />
        <Total total={part1.units + part2.units + part3.units} />
      </main>
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
