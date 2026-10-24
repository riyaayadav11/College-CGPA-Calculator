# CGPA Calculator

A simple, responsive CGPA calculator built with plain HTML, CSS and JavaScript.

## Features
- Add or remove subjects dynamically
- Enter credits and pick a grade for each subject
- Shows CGPA, total credits and approximate percentage
- Input validation and mobile-friendly layout

## Formula
```
CGPA = Σ (credits × grade point) / Σ credits
Percentage ≈ CGPA × 9.5
```

## Grade scale (10-point)
| Grade | Points |
|-------|--------|
| O     | 10     |
| A+    | 9      |
| A     | 8      |
| B+    | 7      |
| B     | 6      |
| C     | 5      |
| D     | 4      |
| F     | 0      |

Change the `GRADES` object in `script.js` to match your university's scale.

## Run it
Just open `index.html` in your browser. No build step or dependencies.

## Files
- `index.html` – page structure
- `style.css` – styling
- `script.js` – calculation logic
