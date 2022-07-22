# Build Amazing Timelines

![Create your own timeline](https://user-images.githubusercontent.com/57345333/180435506-7d51bec3-0cc8-48b1-9f22-24199c988dbf.gif)

## How to use it

Choose the `timeline` or `timeline-labeled` tag

- #### `timeline` tag

  Requires `+` at the beginning of each line:

  - each event has 3 `+`s in total: 1 for time, 1 for title and 1 for content
  - you can separate them with empty lines if it's easier for you to write
~~~markdown
```timeline-labeled
[line-3, body-2]
date: pre</br> 17th century
title: Origins of coffee
content: The modern version of roasted coffee originated in Arabia. During the 13th century, coffee was extremely popular with the Muslim community for its stimulant powers, which proved useful during long prayer sessions. By parching and boiling the coffee beans, rendering them infertile, the Arabs were able to corner the market on coffee crops. In fact, tradition says that not a single coffee plant existed outside of Arabia or Africa until the 1600s, when Baba Budan, an Indian pilgrim, left Mecca with fertile beans fastened to a strap across his abdomen. Baba’s beans resulted in a new and competitive European coffee trade.


date: 17th century
title: Europe and coffee
content: In 1616, the Dutch founded the first European-owned coffee estate in Sri Lanka, then Ceylon, then Java in 1696. The French began growing coffee in the Caribbean, followed by the Spanish in Central America and the Portuguese in Brazil. European coffee houses sprang up in Italy and later France, where they reached a new level of popularity. Now, it is de _rigueur_ for Parisians to indulge in a cup of coffee and a baguette or croissant at the numerous coffee cafes throughout Paris.
```
~~~

<br/>

- #### `timeline-labeled` tag

  - each event has a corresponding label (`date`, `title` and `content`) that starts the line
  - you can separate them with empty lines if it's easier for you to write
  - [Example](./readme_source/timeline_labeled_tag.md)

  <br/>

#### `[]` is optional!

You can use `[]` at the beginning of the code-block to add pre-written classes or your own classes to the wrapper. <br />
Example: `[spaced-paragraph, your-class, even-more]` <br />
Can be used for `timeline` and `timeline-labeled` tag <br />

Example:

    ```timeline-labeled
    [line-5, body-3, active-color-interactive-accent-hover]

    date: 13th April 1969
    title: Enim sit amet venenatis urna
    content:
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    ```

# Just a snippet

Use this [file](./just_the_snippet/timeline.css) as a snippet using this [template](./just_the_snippet/template.md)!

# Customize

Using pre-written classes for `line`, `body` and the `active color`:

- ### line:
  - preview (soon, for now test it in obsidian)
  - classes:
    - line-2
    - line-3
    - line-4
    - line-5

<br />

- ### body:
  - preview (soon, for now test it in obsidian)
  - classes:
    - body-2
    - body-3
    - body-4

<br />

- ### active color:
  - it uses obsidian's css variables as active colors, so it matches the theme
  - default active color is _background-modifier-success_
  - if you want your own color use `--timeline-active-color` css variable attached to `.timeline` class
    ```
    .timeline
        --timeline-active-color: #00c137
    ```
  - preview (soon, for now test it in obsidian)
  - classes:
    - active-color-background-modifier-success
    - active-color-background-modifier-error
    - active-color-background-modifier-error-hover
    - active-color-text-accent
    - active-color-text-accent-hover
    - active-color-text-error
    - active-color-text-error-hover
    - active-color-text-selection
    - active-color-interactive-accent
    - active-color-interactive-accent-hover
    - active-color-interactive-success

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/CarSalesman)
