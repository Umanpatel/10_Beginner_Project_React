import Accordion from "./components/Accordion"
import Calculator from "./components/Calculator"
import Counter from "./components/Counter"
import Form from "./components/FormValidation"
import Hiddensearchbar from "./components/HiddenSearchBar"
import Meals from "./components/Meals"
import Testimonials from "./components/Testimonials"
import Todo from "./components/Todo"
import ToggelBackgroundColor from "./components/ToggelBackgroundColor"
// import {accordionData} from './utils/content'
const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <ToggelBackgroundColor/> */}
      {/* <Hiddensearchbar/> */}
      <Testimonials/>

      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div> */}
      {/* <Form/> */}
    </div>
  )
}

export default App