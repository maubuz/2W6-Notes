# List Styles

!>  For this section we will refer to the page **[CSS Lists](https://www.w3schools.com/css/css_list.asp)** by W3Schools.

Using the reference above, look at the following CSS properties:

| Property                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [list-style ](https://www.w3schools.com/cssref/pr_list-style.asp) (shorthand) | Sets all the properties for a list in one declaration        |
| [list-style-image](https://www.w3schools.com/cssref/pr_list-style-image.asp) | Specifies an image as the list-item marker                   |
| [list-style-position](https://www.w3schools.com/cssref/pr_list-style-position.asp) | Specifies the position of the list-item markers (bullet points) |
| [list-style-type](https://www.w3schools.com/cssref/pr_list-style-type.asp) | Specifies the type of list-item marker                       |

<br>

## List Style Position

Note that the **default value** of `list-style-position` is `ouitside`.

This means two things:

-  the markers will fall **outside the list items but inside the list itself**
- The **list items have a left padding** (empty space) by default.

*Code*:

```css
ul {
    border: solid 1px gray;
    width: 200px;
}
li {
    border:solid 1px blue;
}
```

*Result*:

<ul style="border:solid 1px gray; width:200px">
  <li style="border:solid 1px blue;">Coffee</li>
  <li style="border:solid 1px blue;">Tea</li>
  <li style="border:solid 1px blue;">Coca Cola</li>
</ul>

<br>

> Its common practice to use list-items in a navigation bar by resetting their default values:



```css
ul {
    list-style: none;
    padding: 0px;
    width: 200px;
}
li {
    background-color: #6287DB;
    color: white;
    text-align: center;
    border-raidius: 10px;
    padding: 0.8rem;
    margin: 0.4rem;
}
```

<ul style="list-style: none; padding: 0px; width:200px">
  <li style="background-color: #6287DB; color: white; text-align: center; border-radius: 10px; padding: 0.8rem; margin: 0.4rem;">Home</li>
  <li style="background-color: #6287DB; color: white; text-align: center; border-radius: 10px; padding: 0.8rem; margin: 0.4rem;">Products</li>
  <li style="background-color: #6287DB; color: white; text-align: center; border-radius: 10px; padding: 0.8rem; margin: 0.4rem;">Contact</li>
</ul>



In the example above the shorthand notation was used with only one value. **For non-specified values, their default values are loaded.**