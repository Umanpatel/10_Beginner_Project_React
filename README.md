# 10 Beginner Projects in React.js


# 1. Counter

This is a simple React-based counter application that allows users to increment and decrement a number using buttons.

## Features

- Increment and decrement counter functionality
- Uses React's `useState` hook for state management
- Styled with an external CSS file (`style.css`)

## Usage

- Click `+` to increase the count.
- Click `-` to decrease the count.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS


# 2. Todo

This is a simple React-based Todo application that allows users to add and remove tasks.

## Features

- Add new todos
- Remove completed todos
- Uses React's `useState` hook for state management
- Styled with an external CSS file (`style.css`)

## Usage

- Type in the input field to add a new todo.
- Click `Submit` to add the todo to the list.
- Click `X` to remove a todo from the list.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

# 3. Meals API Project

This is a React-based application that fetches and displays a collection of seafood meals using an external API.

## Features

- Fetches seafood meals from [TheMealDB API](https://www.themealdb.com/)
- Displays meal names, images, and meal IDs
- Uses React's `useState` and `useEffect` hooks for state management and data fetching
- Styled with an external CSS file (`style.css`)

## Usage

- The app automatically fetches seafood meals from the API on load.
- Meals are displayed with their names, images, and IDs.

## Technologies Used

- React
- JavaScript (ES6+)
- Axios (for API requests)
- CSS

# 4. Calculator

This project contains a simple calculator built with React.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Clear button to reset the input.
- Responsive design with a modern look.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

## Usage

To use the calculator component, import it into your React application and include it in your JSX.

```jsx
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
```

# 5. Toggle Background

This project contains a simple background toggle built with React.

## Features

- Toggle between two background colors.
- Simple and clean design.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

## Usage

To use the toggle background component, import it into your React application and include it in your JSX.

```jsx
import ToggleBackground from './components/ToggleBackground';

function App() {
  return (
    <div className="App">
      <ToggleBackground />
    </div>
  );
}

export default App;
```

# 6. Hidden Search Bar

This project implements a hidden search bar component using React.

## Features

-   Initially displays a search icon.
-   Clicking the icon reveals a text input field.
-   Clicking outside the input field hides the input and returns to the icon.
-   Changes background color on click.

## Technologies Used

-   React
-   JavaScript (ES6+)
-   CSS
-   react-icons

## Usage

To use the hidden search bar component, import it into your React application and include it in your JSX.

```jsx
import HiddenSearchBar from './components/HiddenSearchBar';

function App() {
  return (
    
      <HiddenSearchBar />
    
  );
}

export default App;
```

# 7. Testimonials

This project implements a simple testimonial slider using React.

## Features

- Displays testimonials with quotes and author names.
- Allows users to navigate through testimonials using "Previous" and "Next" buttons.
- Uses React's `useState` hook for managing the current testimonial index.
- Styled with an external CSS file (`testimonials.css`).

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

## Usage

To use the testimonials component, import it into your React application and include it in your JSX.

```jsx
import Testimonials from './components/Testimonials';

function App() {
  return (
    
      <Testimonials />
    
  );
}

export default App;
```

# 8. Accordions

This project implements an accordion component using React.

## Features

- [**Replace this with a list of your accordion's features**]
- Example:  Allows users to expand and collapse multiple sections of content.
- Example:  Uses React's `useState` hook to manage the open/closed state of each accordion item.
- Example:  Styled with CSS for a clean and user-friendly interface.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

## Usage

To use the accordions component, import it into your React application and include it in your JSX.

```jsx
import Accordions from './components/Accordions';

function App() {
  return (
    <div>
     <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
``` 

# 9. Form Validation

This project implements form validation using React.

## Features

-   Validates user input in a form.
-   Provides real-time feedback to the user on validation status.
-   Demonstrates different types of validation (e.g., required fields, email format, password strength).
-   Uses React's `useState` hook for managing form input and validation errors.

## Technologies Used

-   React
-   JavaScript (ES6+)
-   CSS

## Usage

To use the form validation component, import it into your React application and include it in your JSX.

```jsx
import FormValidation from './components/FormValidation';

function App() {
  return (
      <FormValidation />
  );
}

export default App;
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Umanpatel/10_Beginner_Project_React.git
   ```
2. Navigate to the project directory:
   ```bash
   cd 10_Beginner_Project_React
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```



