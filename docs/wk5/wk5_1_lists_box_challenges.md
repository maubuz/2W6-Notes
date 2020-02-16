# 


# List Styles

!>  For this section we will refer to the page **[CSS Lists](https://www.w3schools.com/css/css_list.asp)** by W3Schools.

Using the reference above, look at the following CSS properties:

| Property                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [list-style ](https://www.w3schools.com/cssref/pr_list-style.asp) (shorthand) | Sets all the properties for a list in one declaration        |
| [list-style-image](https://www.w3schools.com/cssref/pr_list-style-image.asp) | Specifies an image as the list-item marker                   |
| [list-style-position](https://www.w3schools.com/cssref/pr_list-style-position.asp) | Specifies the position of the list-item markers (bullet points) |
| [list-style-type](https://www.w3schools.com/cssref/pr_list-style-type.asp) | Specifies the type of list-item marker                       |



## List Style Position

Note that the **default value** of `list-style-position` is `ouitside`.

This means two things:

-  the markers will fall **outside the list items but inside the list itself**
-  The **list items have a left padding** (empty space) by default.

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



# Lists & Navigation Bars

> Its good practice to use list-items in a navigation bar by resetting default values.



HTML List elements are used as navigation bars because they offer a range of semantic advantages:

- Hierarchy of links (specially for drop-down menus);
- `ul` lists can announce how many items it has;
- Tab order is built-in (particularly important for keyboard navigation).



If you would like to learn more about why we use lists, see this [Stackoverflow discussion on Why do navigation bars in HTML5 as lists?](https://stackoverflow.com/questions/36811224/why-do-navigation-bars-in-html5-as-lists)



**When creating your navigation bar from a list remember to:**

- Reset `text-decoration` on the `<a>` element and `list-style` on the `<li>` element;

  ![image-20200216134241665](assets/image-20200216134241665.png)

  

- Reset unwanted paddings and margins (specially the default left padding);

  ![image-20200216134004629](assets/image-20200216134004629.png)

  <br>

- Add paddings on the `<a>` element (rather than the `<li>` element) so it has a clickable area;

  ![image-20200216135015617](assets/image-20200216135015617.png)

<br>

- Set the `display`  property of the `<a>` element to `block` or `inline-block` (depending on who is setting the width).
  - Otherwise the default `inline` value will ignore any vertical paddings or margins.

![display_a_nav_bar](assets/display_a_nav_bar.gif)



<br>

- For horizontal alignment, setup the `display` property of the `<li>` to `inline-block`.
  - Otherwise, the `<li>` has a default behaviour of block-level, putting each item on a new line.
  - Note: it is possible to achieve a similar behaviour using floats but it is not recommended.

![display_li_nav_horizontal](assets/display_li_nav_horizontal.gif)

<br>

# References & Diving Deeper

> Recommended reading: **[CSS Navigation Bar](https://www.w3schools.com/Css/css_navbar.asp)** by W3Schools



<br>

## Lab #1

Create the vertical navigation menu below by using the provided html code and manipulating it's CSS properties.

**Requirements:**

- The colored part of the hyperlink should be "clickable" (the mouse cursor should change as soon as you hover it).



*HTML*

```html
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```



![lab4_nav_list](assets/lab4_nav_list.gif)



<br>

## Lab #2

2. Transform the vertical navigation bar from the previous lab into a horizontal bar using the `display` property (see example below)



![image-20200216104216085](assets/image-20200216104216085.png ':zoom:500')



<br>

## Lab #3

Style the starting html code in order to create the 3 column section illustrated below:

```html
<body>
    <main>
        <section id="container">
            <h2>The 3 Column Container</h2>
            <article class="first">
                <h3>First box</h3>
            </article>
            <article class="second">
                <h3>Second box</h3>
            </article>
            <article class="third">
                <h3>Third box</h3>
            </article>
        </section>
    </main>
</body>
```



![image-20200216150238379](assets/image-20200216150238379.png)