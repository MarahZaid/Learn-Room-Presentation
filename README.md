# Learn+ Room — Innovation Park presentation

An interactive web presentation of **Learn+ Room – Smart Classroom System**, made for An-Najah Innovation Park.
It has seven slides and is planned to run in under five minutes.

## Run it

**Double-click `index.html`.** It needs no install, no server and no internet connection.
Chrome or Edge is recommended. Press **F** for full screen.

The deck needs the files below. Copy the whole folder to a USB stick and it will run from there.

```
index.html        The slides (all slide text is here)
css/style.css     Design and animation
js/deck.js        Navigation, icons, background, settings
assets/img/       Project images taken from the original PDF
assets/fonts/     Local fonts (Figtree, JetBrains Mono, both under the SIL Open Font License)
```

## Present it

| Key | Action |
| --- | --- |
| `→` `Space` `PageDown` `Enter` (and most clickers) | Next |
| `←` `Shift+Space` `PageUp` `Backspace` | Back |
| `Home` / `End` | First / last slide |
| `1` – `7` | Jump to a slide |
| `F` | Full screen |

- **Mouse:** click the right three-quarters of the screen to go forward, or the left quarter to go back. You can also click a segment of the progress bar.
- **Touch:** swipe left or right.
- **Last slide:** one extra press turns the closing message into "Thank you".
- **Links to a slide:** `index.html#5` opens slide 5.
- The cursor and controls fade out when the mouse is still.

### Suggested timing (about 4½ minutes)

| # | Slide | Time |
| --- | --- | --- |
| 1 | The idea | 0:25 |
| 2 | The problem | 0:35 |
| 3 | Our solution | 0:35 |
| 4 | How it works | 0:40 |
| 5 | What we built | 1:00 |
| 6 | Taking Learn+ Room to the next level | 0:40 |
| 7 | The next step + Thank you | 0:25 |

## Edit it

- **Slide text:** edit `index.html`. Each slide is a `<section class="slide">` with a comment heading such as `05 · WHAT WE BUILT`.
- **Contact line on the "Thank you" screen:** open `js/deck.js` and set `CONFIG.contact` (for example an email address). It stays hidden while it is empty.
- **Images:** replace files in `assets/img/` with new ones **of the same name**. Photos with a white or plain background look best on slide 5.

| File | Used for |
| --- | --- |
| `access-door.jpg` | Door access unit |
| `attendance-camera.jpg` | Attendance camera |
| `lighting-module.jpg` | Lighting module |
| `climate-module.jpg` | Temperature / CO₂ module |
| `chairs-group.jpg` | Smart chairs (`chairs-lecture.jpg` is a spare) |
| `app-dashboard.png`, `app-report.png` | Mobile app screens (`app-lighting.png` is a spare) |

## Put it online with GitHub Pages

On a free account, GitHub Pages requires a **public** repository, so anyone with the link can see it.

1. Create a new **public** repository on GitHub, for example `learn-plus-room`.
2. Upload the whole folder (or push it with git):
   ```
   git init -b main
   git add .
   git commit -m "Learn+ Room presentation"
   git remote add origin https://github.com/USERNAME/learn-plus-room.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**. Set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then click **Save**.
4. After a minute or two the deck is live at `https://USERNAME.github.io/learn-plus-room/`.

All paths are relative, and `.nojekyll` makes GitHub serve the files exactly as they are.
