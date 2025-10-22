# CS 260 Notes

[My startup - Welcome Home, Elder!](https://startup.welcomehomeelder.com)

Doing commits, pulls, and pushes in the terminal is a lot more complicated than just using the vscode UI

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 52.203.120.107

Just always keep the instance running (although it should be technically fine if you stop it because it has an elastic IP).

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. Now to add functionality to the skeleton.

## CSS

Took me a couple hours to get the hang of the grid system, general syntax, and finish styling the webpage. The responsiveness to page resizing is a big plus. 

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
## Midterm 1 Review
What does the <link> element do?
It links external resources to an HTML document, most commonly a CSS file using rel="stylesheet".

What does a <div> tag do?
It defines a generic container used to group and style sections of HTML content.

Difference between #title and .grid selector?
#title selects an element by id (unique, one per page); .grid selects elements by class (can apply to many).

Difference between padding and margin?
Padding is inside the border (space between content and border); margin is outside the border (space between elements).

Given this HTML and CSS, how will images be displayed using flex?
They’ll align according to the flex container’s properties—typically in a row with equal spacing unless otherwise specified.
Common flex properties:
- flex-direction: row | column
- justify-content: flex-start | center | space-between
- align-items: flex-start | center | stretch
- flex-wrap: wrap

.container {
  display: flex;              /* enables flexbox */
  justify-content: center;    /* aligns items horizontally */
  align-items: center;        /* aligns items vertically */
  gap: 10px;                  /* space between items */
}

What does the following padding CSS do?
It adds internal space between the element’s content and its border.
1. Padding

Adds space inside the element — between the content and the border.

padding: 10px;                /* all sides */
padding: 10px 20px;           /* top/bottom 10px, left/right 20px */
padding: 5px 10px 15px 20px;  /* top, right, bottom, left */

2. Margin

Adds space outside the element — between the element and others around it.

margin: 10px;                 /* all sides */
margin: 10px 20px;            /* top/bottom 10px, left/right 20px */
margin: 5px 10px 15px 20px;   /* top, right, bottom, left */

3. Border

Creates a visible line around the element.

border: 2px solid black;      /* width, style, color */
border-top: 1px dashed red;   /* only top border */


What does code using arrow syntax function declaration do?
It defines a concise function using => without its own this binding.

const add = (a, b) => a + b;
function add(a, b) {
  return a + b;
}

What does code using map with an array output?

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const people = [{name: "Alice"}, {name: "Bob"}, {name: "Eve"}];
const names = people.map(person => person.name);
console.log(names); // ["Alice", "Bob", "Eve"]


What does code using getElementById and addEventListener output?
It finds an element by id and runs a callback (e.g., logs or changes text) when the specified event occurs.

<button id="myButton">Click Me</button>
<p id="message">Hello!</p>

// Select the button by its ID
const button = document.getElementById("myButton");

// Add a click event listener
button.addEventListener("click", () => {
  // Change the text of the paragraph when button is clicked
  document.getElementById("message").innerText = "Button was clicked!";
});


What does the line using a # selector do?
It selects the HTML element with the matching id (e.g., #title → <div id="title">).

Which are true about the DOM?
It represents the HTML page as a tree of objects; JavaScript can read and modify it dynamically.

Default display property of <span>?
inline.

CSS to make all divs red:

div { background-color: red; }


Display an image with a hyperlink:

<a href="https://example.com"><img src="image.jpg" alt="desc"></a>


CSS box model order (inside → out):
Content → Padding → Border → Margin.

CSS to make "trouble" green only:

#trouble { color: green; }


What will a for loop with console.log output?
It prints each loop iteration value to the console (e.g., numbers or array elements).

Change element with id “byu” to green:

document.getElementById("byu").style.color = "green";


Opening tags:
Paragraph → p, Ordered list → ol, Unordered list → ul,
h1 → h1, h2 → h2, h3 → h3.

Declare document type as HTML:
!DOCTYPE html

Valid JS syntax for control statements:
if (cond) {...}, else {...}, for (...) {...}, while (...) {...},
switch(expr){case x: ... break; default: ...}

Correct syntax for JS object:

const obj = { name: "Alice", age: 25 };


Can you add new properties to JS objects?
Yes — objects are dynamic (obj.newProp = value;).

Tag to include JavaScript on a page:
<script src="file.js"></script> or inline <script>...</script>.

Set text “animal” to “crow” but not “fish”:

document.getElementById("animal").innerText = "crow";


Which describes JSON correctly?
A lightweight data format using key-value pairs, similar to JS objects but as plain text.

What does chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?

chmod change permissions

pwd print working directory

cd change directory

ls list files

vim/nano text editors

mkdir make directory

mv move/rename

rm remove

man show help

ssh remote shell

ps show processes

wget download files

sudo run as superuser

Which command creates a remote shell session?
ssh

What does ls -la do?
Lists all files (including hidden) in long format with permissions and details.

Domain breakdown: banana.fruit.bozo.click

Top-level domain (TLD): .click

Root domain: bozo.click

Subdomain: banana.fruit

Is a web certificate necessary for HTTPS?
Yes — HTTPS requires a valid SSL/TLS certificate.

Can a DNS A record point to an IP or another A record?
It can point only to an IP address, not another A record.

Ports 443, 80, 22 reserved for?
22 = SSH → Secure login
80 / 443 = Web (HTTP / HTTPS)
53 = DNS → translates names to IPs
25 / 110 / 143 = Email protocols
3306 / 5432 = Databases

What does code using Promises output?
It depends on the .then() and .catch() logic — the resolved value is passed to .then() when the Promise completes successfully.