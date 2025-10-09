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

Had to fix some buttons and add some "/" that html doesn't require because of some conflicting CSS. Overall the instructions were clear and I was able to reformat things without any major problems.

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
