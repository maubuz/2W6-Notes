# HTML



### Semantics



Q.1) In the code below, who is the parent of the `<a>` element ?

```html
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
```



<br>

Q.2) What is the relationship between the div element with `id = "selected"` and the `<html>` root element?

```html
<html lang="en">
<head></head>
<body>
    <h1>Title</h1>
    <div id = "selected">
        <h2>Welcome to our site!</h2>
    </div>
</body>
</html>
```



1. The `<div>` element is the child of the root `<html>` element
2. The `<div>` element is the grandparent of the root `<html>` element
3. The `<div>` element is the grandchild of the root `<html>` element
4. The `<div>` element is the sibling of the root `<html>` element



<br>

### Units

Q.3)  What will be the font size in pixels of the `<h1>` and `<p>` elements below ? Please explain why that is.

```html
<head>
    <style>
        h1 {
            font-family: 'Rubik', sans-serif;
        }
        main {
            font-size: 18px;
        }
        p{
            font-size: 1rem;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <main>
        <h1>Heading 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
    </main>
</body>
```



<br>

### Syntax & HTML Elements

Q.4) Which line of HTML code demonstrates an element having an attribute named `title`?

1. `<p id="title"> The Earth is round.</p>`
2. `<p>title</p>`
3. `<p title="each fact"> The Earth is round.</p>`
4. `<p name="title">The Earth is round.</p>`



<br>

Q.5) The following code is supposed to display an image, but fails to do so.  Why? 

`<img href="./assets/smiley.gif" alt="Smiley face">`

1. The relative path to the image has a syntax mistake.
2. The `<img>` tag can only display .png, .jpeg and .svg image formats.
3. The src attribute is missing and must be set equal to the imge URL.
4. The image URL should be set in single quations marks. 



<br>

### Box Model



Q.6) Match the description with the appropriate elements (place the number beside each of the three elements).

A. Inline element

B. Block-level element

C. Inlike-block element



1. `<span>`
2. `<img>`
3. `<h1>` 
4. `<div>`
5. Will take up the whole width of its parent.
6. Will collapse vertical margins into each-other.
7. Paddings and Margins in the vertical direction are displayed in the page but do not displace elements.
8. Paddings and Margins in the vertical direction will move elements up or down.
9. Multiple elements can be placed in the same line.
10. Can be centered horizontally by applying `text-align: center` to it's parent.



<br>

### Function & Implementing HTML


Q.7) Markup languages use special symbols in human readable text in order to create a hierarchy of information which serves several purposes. Which statement below is not a purpose of html markup:

- it allows users scanning a site to quickly pick out the most important ideas.
- it helps visually impaired users navigate the content of a page using special software.
- it helps search engines pick out important keywords that might otherwise get lost in a sea of text.
- it helps developers style the document in a dynamic way.



<br>

Q.8) Given the following directory structure, how would one create a link the the page second_page.html from the page index.html ?

![image-20200306171753846](assets/image-20200306171753846.png)

1. `.. / img / second_page.html`

2. `. / secondary / second_page.html`

3. `.. / Simple_Page / second_page.html`
4. `. / img / second_page.png`



<br>

# CSS



### Syntax

Q.9) .Which type of CSS declaration goes in the opening tag of an element?

1. embedded
2. inline
3. external
4. internal



<br>

Q.10) Which type of selector is used to apply styling to more than one element?

1. id
2. group
3. link
4. class



<br>

Q.11) Which box property configures the empty space between adjacent elements?

1. padding
2. border
3. margin
4. display



<br>

Q.12) This rule is used along with the 'width' property to center page content:

1. margin-left: auto; margin-right: auto;
2. margin: 15 0 0 5;
3. margin: auto 20px;
4. margin: margin 15px 0 5px 0;



<br>

Q.13) Which CSS property can be used to darken a background image ?

1. background-gradient
2. background-image
3. background-clip
4. linear-gradient



<br>

Q.14) This would cause the element not to display...

1. display: block;
2. display: 0px;
3. display: none;
4. display: inline;



<br>

### Browser Defaults



Q.15) Given the code below, why is the color of the `<a>` element not red like it's parent?

*HTML*

```html
<div id="red-section">
    <h3>This container is red</h3>
    <a href="#">Click here for more</a>
</div>
```

*CSS*

```css
#red-section {
    color: red;
}
```

*Result*

<div id="red-section">
    <h3 style="color: red;">This container is red</h3>
    <a href="#">Click here for more</a>
</div>



<br>

Q.16) Based on the question above, without using a color code or name, how can we set the color of `<a>` to blue?



<br>

### Flexbox



Q17) Using two different Flexbox alignment techniques, place the target image perfectly in the middle of  the background element.

[Link for target image here](https://www.flaticon.com/free-icon/target_673118?term=aim&page=1&position=5)

```html
<html lang="en">
<head>
    <style>
        section{
            background-color: aquamarine;
            height: 400px;
        }
        img{
            
        }
    </style>
</head>
<body>
	<section >
    	<img src="./img/target.png" alt="">
	</section>
</body>
</html>
```



<br>

Q.18) Using Flexbox, recreate the horizontal nav bar below:

![image-20200306090427770](assets/image-20200306090427770.png)

(Starting html)

```html
<nav id="navbar">
	<div class="container">
    	<h1 class="logo"><a href="index.html">HJC</a></h1>
        <ul>
        	<li><a href="index.html">Home</a></li>
        	<li><a href="about.html">About</a></li>
        	<li><a href="contact.html">Contact</a></li>
        </ul>
	</div>
</nav>
```



<br>

Q.19) Using Flexbox, recreate this section of a website based on the starting html code:

![image-20200306113947427](assets/image-20200306113947427.png)

```html
<section id="home-info">
    <div class="info-img"></div>
    <div class="info-content">
		<h2><span class="text-primary">The History</span> Of Our Hotel</h2>
		<p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          aliquam dolor alias iste autem, quaerat magni unde accusantium qui
          fuga placeat quidem quo pariatur, voluptatum, ea sequi? Corporis,
          explicabo quisquam dolor placeat praesentium nesciunt mollitia quos
          nobis natus voluptatum asperiores!
		</p>
		<a href="about.html" class="btn">Read More</a>
	</div>
</section>
```

```css
.bg-dark {
  background: #333;
  color: #fff;
}
#home-info{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7em;
}
.info-img{
  background: url(https://images.unsplash.com/photo-1514726363016-50479e5ef4f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80);
}
.info-content{
  text-align: center;
}
```



<br>

### Positioning

Q.20) Using only the `display` property, place the platter on top of the hand and the piece of text on top of the platter.

> Use the proper `display` settings so that the if the view-port  width changes, the elements continue positioned.



<iframe height="674" style="width: 100%;" scrolling="no" title="Test1_Practice_Platter_start" src="https://codepen.io/maujac/embed/wvaPmyY?height=674&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/wvaPmyY'>Test1_Practice_Platter_start</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



(Result)

![practice_platter](assets/practice_platter.gif)

<br>

### Selectors

Q.21) Given the html structure below, how would you select all the children of the "features" section? (select all that apply)

```html
   <main>
        <section id="about">
            <h2>The Club</h2>
            <p>Our club is made of students and teachers.</p>
        </section>
       <section id="featured">
            <article id="feat-1">
                <img src="https://images.unsplash.com/photo-158109"
                    alt="printed blueprints of robot">
                <h3>Design</h3>
                <p>Lorem, ipsum dolor sit amet. Id, facere?</p>
            </article>
            <article id="feat-2">
                <img src="https://images.unsplash.com/photo-157117"
                     alt="Two PC monitors with many lines of code">
                <h3>Code</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </article>
            <article id="feat-3">
                <img src="https://images.unsplash.com/photo-1570155"
                    alt="Workbench with robot parts being assembled">
                <h3>Build</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </article>
        </section>
    </main>
```



1. section #feat-1, #feat-2, #feat-3 { ... }
2. section article { ... }
3. #featured article { ... }
4. #featured #feat-1, #feat-2, #feat-3 { ... }
5. article { ... }
