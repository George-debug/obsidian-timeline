## How to use it

- Add the [timeline-snippet.css](https://github.com/George-debug/obsidian-timeline/blob/master/src/style/snippet/timeline-snippet.css) file to your vault. </br>
  Options > Appearance > CSS snippets 
- Starts the page you want to use your timeline with
  ~~~markdown
  ---
  cssclass: timeline
  ---
  ~~~


## Page Example
~~~markdown
---
cssclass: timeline, body-2, line-3
---

## Perhaps a title

- pre</br> 17th century
- Origins of coffee
- The modern version of roasted coffee originated in Arabia. During the 13th century, coffee was extremely popular with the Muslim community for its stimulant powers, which proved useful during long prayer sessions. By parching and boiling the coffee beans, rendering them infertile, the Arabs were able to corner the market on coffee crops. In fact, tradition says that not a single coffee plant existed outside of Arabia or Africa until the 1600s, when Baba Budan, an Indian pilgrim, left Mecca with fertile beans fastened to a strap across his abdomen. Baba’s beans resulted in a new and competitive European coffee trade.

- 17th century
- Europe and coffee
- In 1616, the Dutch founded the first European-owned coffee estate in Sri Lanka, then Ceylon, then Java in 1696. The French began growing coffee in the Caribbean, followed by the Spanish in Central America and the Portuguese in Brazil. European coffee houses sprang up in Italy and later France, where they reached a new level of popularity. Now, it is de _rigueur_ for Parisians to indulge in a cup of coffee and a baguette or croissant at the numerous coffee cafes throughout Paris.

other stuff written 
~~~

## WARNING!
Every list that is not inside the timeline will render another timeline!

## Customize

Using pre-written classes for `line`, `body` and the `active color`:

- ### line:
  - line-2
  - line-3
  - line-4
  - line-5

- ### body:
  - body-2
  - body-3
  - body-4

- ### active color:
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

![Timiline with colors](https://user-images.githubusercontent.com/57345333/180477136-256d5cf5-aaf3-41ee-9055-e4e82de35af2.gif)

For `active color` we use obsidian's css variables as active colors, so it matches the theme. The default active color is `background-modifier-success`.
If you want your own color use `--timeline-active-color` css variable attached to `.timeline` class
```css
.timeline
    --timeline-active-color: #00c137
```

## Special Thanks
- [Welding Torch](https://github.com/Welding-Torch)
- [Ivan Che](https://github.com/taqyon)

## Support
[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/CarSalesman)
