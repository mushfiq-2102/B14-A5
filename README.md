# Dev Stack Builder
Dev Stack Builder is a React web app for exploring developer tools and
technologies, then building your own personal "stack" by adding the ones you
want from a browsable card grid. Pick a frontend framework, a database, a
styling tool — whatever fits your next project — and watch your selections
collect live in a running sidebar you can edit as you go.

## Technology Used
- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- React Toastify
- React Icons
- JSON

## Features
1. Live stack builder — browse 15 technologies across categories like
   Frontend, Backend, Database, DevOps and add any of them to your
   "Your Stack" sidebar with one click. Duplicate adds are blocked with a
   warning toast and each added card is disabled and tick marked Added to
   Stack.
2. Fully responsive, gradient-themed UI — a sticky navbar, a two-tone hero section, and a 3/2/1-column
   responsive card grid, all sharing one orange, pink, violet gradient
   defined in a single CSS variable.
3. Instant feedback everywhere — react-toastify alerts fire for every
   stack action (add, duplicate attempt, remove, remove all) and the
   technology grid shows a loading state while the JSON dataset is fetched.

## Q&A
1. What is JSX and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.
We use JSX in React to create the UI and components easily.

2. What is the difference between props and state?**
Props are used to pass data from a parent component to a child component.
State is data that belongs to a component and can change over time.
Props are normally read-only, but state can be updated.

3. What does the `useState` hook do and where did you use it in this
project?
useState is used to store and update data in a React component.
In this project, we used it to store the selected technologies in the stack.
When we add or remove a technology, the state is updated and the UI changes automatically.

4. What does the `useEffect` hook do and why did you need it to load the JSON data?
useEffect is used to perform an action after the component loads or updates.
In this project, we used it to load the technology data from the JSON file.
After the data is loaded, we store it and display the technologies on the page.

5. Why does every item in a `.map()` list need a unique `key` prop?
The key helps React identify each item in a list.
It helps React know which item was added, removed or changed.
So, every item should have a unique key.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing something only when a condition is true.
In our project, when the stack is empty, we show “Your stack is empty”. When technologies are added, that message is replaced by the selected technologies.

7. How do you pass data from a parent component to a child component and how does a child send something back to the parent?
A parent sends data to a child using props.
The parent can also pass a function as a prop.
The child calls that function to send an action or data back to the parent.