# 🧱 Dev Stack Builder

Dev Stack Builder is a React web app for exploring developer tools and
technologies, then building your own personal "stack" by adding the ones you
want from a browsable card grid. Pick a frontend framework, a database, a
styling tool — whatever fits your next project — and watch your selections
collect live in a running sidebar you can edit as you go.

## 🛠️ Technology Used

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- React Toastify (alerts/notifications)
- React Icons
- JSON (local technology dataset)

## ✨ Features

1. **Live stack builder** — browse 15 technologies across categories like
   Frontend, Backend, Database, and DevOps, and add any of them to your
   "Your Stack" sidebar with one click. Duplicate adds are blocked with a
   warning toast, and each added card is disabled and marked "✓ Added to
   Stack".
2. **Fully responsive, gradient-themed UI** — a sticky navbar (with a working
   hamburger menu on mobile), a two-tone hero section, and a 3/2/1-column
   responsive card grid, all sharing one orange → pink → violet gradient
   defined in a single CSS variable.
3. **Instant feedback everywhere** — react-toastify alerts fire for every
   stack action (add, duplicate attempt, remove, remove all), and the
   technology grid shows a loading state while the JSON dataset is fetched.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## ❓ React Q&A

**1. What is JSX, and why is it used in React?**
JSX lets me write what looks like HTML directly inside my JavaScript/TypeScript
files. Under the hood it compiles down to plain `React.createElement()` calls,
but writing those by hand for a whole page of nested components would be
painful to read and maintain. JSX just makes the structure of the UI obvious
at a glance — I can look at `TechnologyExplorer.tsx` and immediately see the
grid of cards next to the sidebar, instead of parsing a tree of function
calls.

**2. What is the difference between props and state?**
Props are values a component receives from its parent — they're read-only
from the component's own point of view, it can't change them itself. State is
data a component owns and manages internally, and changing it triggers a
re-render. In this project, `TechnologyCard` receives `technology`, `isAdded`,
and `onAdd` as props because `TechnologyExplorer` decides what those are. But
`stack` inside `TechnologyExplorer` is state, because `TechnologyExplorer`
itself decides what's in it and when it changes.

**3. What does the `useState` hook do, and where did you use it in this
project?**
`useState` gives a component a value that survives between re-renders, and
updating it schedules a new render so the UI reflects the change. The main
example here is `const [stack, setStack] = useState<Technology[]>([])` in
`TechnologyExplorer.tsx` — that single array powers the entire "Your Stack"
feature. Every add, remove, or remove-all action just calls `setStack`, and
the sidebar and card buttons re-render automatically to match.

**4. What does the `useEffect` hook do, and why did you need it to load the
JSON data?**
`useEffect` lets a component run side effects — things like network requests
— that shouldn't happen during rendering itself. Fetching the technology
data is exactly this kind of side effect, so I fetch `technologies.json`
inside a `useEffect` that runs once when `TechnologyExplorer` mounts, and
store the result with `useState`. I also track a separate `isLoading` boolean
state so the grid can show "Loading technologies..." until the fetch
resolves, which is the loading-state requirement for the challenge part.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items in a list apart when the list changes,
so it knows exactly which item was added, removed, or reordered. Without a
stable key, React falls back to guessing based on position, which can cause
the wrong item's state or DOM node to update. Since every technology already
has its own `id` in the dataset, I used that as the key for both the card
grid and the stack list, instead of the array index (which shifts around
whenever an item is added or removed).

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering just means showing different JSX depending on some
condition, instead of always rendering the same markup. One clear example is
in `YourStack.tsx`, where I check `count === 0` (the stack length): if it's
empty, it renders the "Your stack is empty" placeholder with an icon and
helper text; otherwise it renders the actual list of added items plus the
"Remove All" button.

**7. How do you pass data from a parent component to a child component, and
how does a child send something back to the parent?**
Parent → child is just props — `TechnologyExplorer` hands each technology
object down into `TechnologyCard`, and passes the `stack` array down into
`YourStack`. Child → parent is less direct: a child can't reach up and change
the parent's state on its own, so instead the parent passes down a *function*
as a prop, and the child calls that function. For example,
`TechnologyExplorer` passes `handleAdd` into `TechnologyCard` as `onAdd`;
clicking the button calls `onAdd(technology)`, which is really `handleAdd`
running back in `TechnologyExplorer` and updating `stack` from there. The
child never touches the parent's state directly — it just triggers it.
