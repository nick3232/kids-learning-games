# Shared quiz games

Counting, Addition, Subtraction, Multiplication, and First Letter use this small
static foundation. Matching and Space Math remain independent.

- `quiz.css` contains the existing quiz layout, typography, buttons, feedback,
  arithmetic question presentation, and responsive level dialog.
- `quiz.js` exports `initializeQuiz`, which manages question/choice shuffling,
  answer feedback, progress, completion, replay, and accessible level selection.
- Each game's `index.html` retains its screens, artwork, wording, and hub links.
- Each game's `game.js` exports its `levels` array and initializes the controller.
  Counting and First Letter also supply their own question renderers; their
  `style.css` files contain only their distinctive question presentation.

## Levels and questions

Levels are ordered entries in `game.js`:

```js
export const levels = [
  { questions: [/* existing question objects */] },
  { questions: [/* existing question objects */] },
];

initializeQuiz({ levels });
```

To add a future level, append a level definition and its question content to that
game's array. The controller derives the menu, level numbers, next-level action,
and final-level replay from the array; no navigation HTML or controller edits are
needed. New level buttons use the default blue styling unless explicitly styled.
Existing introductory copy that mentions a level count should be updated then.
No levels or educational content were added during this refactoring.

Each question has `choices` and normally a `correct` value. Arithmetic questions
also have `problem`; First Letter questions have `emoji` and `word`. Counting uses
`emoji` and `count`, with `getAnswer: question => question.count`. Values in
`choices` and the answer must have matching types: numbers for arithmetic and
counting, strings for letters. Answers use strict equality with unlimited retries;
wrong choices disable, and a correct answer enables Next.

`renderQuestion(question, levelNumber)` can replace the default arithmetic
renderer without changing progression or feedback. First Letter supplies its
existing `completionText`; the default is “You completed Level X.”

## Local verification

Serve the repository root with `python3 -m http.server 8000`, then open a game
through HTTP. Native JavaScript modules need HTTP serving rather than `file://`.
All application resource paths are relative and support GitHub Pages project URLs.
There is no install or build step.

When changing the controller, check all five games: every level's selection,
wrong/correct answers, Next, completion, advancement, final replay, hub navigation,
and dialog keyboard focus. Check narrow portrait and short landscape layouts.
When changing data, verify the answer is among the choices and play the new level.
