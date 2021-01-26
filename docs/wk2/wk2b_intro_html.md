





# VS Code, HTML Links and Images



## Trying VS Code

### Finding Your Way Around



![img](https://blobs.gitbook.com/assets%2F-LzKOwj7ftX4mKfA3Iuu%2F-Lzgevn0iylAKGmAUFVv%2F-Lzgg81kuhNficVhCcWZ%2Fimage-20200128092221790.png?alt=media&token=1b1c15cb-29ea-4c5c-840b-738b25a9c160)



![img](https://blobs.gitbook.com/assets%2F-LzKOwj7ftX4mKfA3Iuu%2F-Lzgevn0iylAKGmAUFVv%2F-LzggLVdZR2udQ-jfwB7%2Fimage-20200128090036692.png?alt=media&token=827cd8fa-d7d1-4a38-9c70-e4ec525be871)



<br>

# File Explorer Menu

‌

- Used for creating new files and folders.
- Note that in order to open a file you **must first open its folder.**



![img](https://blobs.gitbook.com/assets%2F-LzKOwj7ftX4mKfA3Iuu%2F-Lzgevn0iylAKGmAUFVv%2F-LzgggmN5MXfmqTOln-r%2Fimage-20200128093338722.png?alt=media&token=8c7b77f7-e603-4a70-ad04-f0d047dcdff6)



<br>

### Autocomplete and Important Shortcuts

👉<u> Live demo:</u>



![img](https://blobs.gitbook.com/assets%2F-LzKOwj7ftX4mKfA3Iuu%2F-Lzgevn0iylAKGmAUFVv%2F-LzghU91_k8T5dLR1jcb%2Fimage-20200128092822904.png?alt=media&token=75d138be-c1e7-46b4-896f-bc6955f8deea)



In-class demo: Can you recognize the used elements?Enter a caption for this image (optional)



# HTML Symbol Entities

Sometimes you want to add characters that can be interpreted as an HTML tag:

<iframe height="265" style="width: 100%;" scrolling="no" title="BaLmNqW" src="https://codepen.io/meghrigJAC/embed/BaLmNqW?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/meghrigJAC/pen/BaLmNqW'>BaLmNqW</a> by Meghrig
  (<a href='https://codepen.io/meghrigJAC'>@meghrigJAC</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

In these situations you will need to use special characters so that the browser will not confuse your content with an HTML tag:


> Here is a reference to [**The Complete List Of HTML Character Codes**](https://websitebuilders.com/tools/html-codes/a-z/) by websitebuilders.com.

<br>



![img](https://blobs.gitbook.com/assets%2F-LzKOwj7ftX4mKfA3Iuu%2F-Lzgi1Q9Z1qfXh4b3qoO%2F-Lzgk3x4x5T322h2Rzvm%2Fimage-20200128095043200.png?alt=media&token=b19b47aa-a1be-4852-b3a6-3f843241cc7d)



<br>

These special symbols can be inputed as an an:

- entity code
- decimal number, or

- hexadecimal number.



Character codes are particularly useful if you would like to display actual html code in a page. For example, the code below would just be rendered by the browser as a hyper link



```html
<a href="http://google.com">Click for Google</a>
```



*Result

[Click for Google](https://www.google.com)

‌

<br>

However, by adding the entities for *greater than* and *smaller than,* we can "fool" the browser into displaying the format that we want:

‌

```html
&lt;a href="http://google.com">Click for Google &lt;/a>
```

‌

`<a href="http://google.com">Click for Google</a>`



<br>

## White space

A very common use of entity codes is adding white space between elements. Remember that the <p> tag will remove any extra white spaces:

`&nbsp;`  for **White-space**



<br>

# Linking with `<a>` tag

Hyperlinks connect different pages and are the reason why the web was invented!

Hyperlinks are defined with the HTML `<a>` tag:

```html
<a href="url">link text</a>
```



<br>

The `href` attribute specifies the destination address (url)  of the link.

The **link text** is the visible part.



There are two other very important concepts to know about html hyperlinks:

- **Using local (relative) references:** point to local pages.
- **The target attribute:** don't send the user away from your page by using `"_blank"`.



## **Using local (relative) references**



- This is used to point to local pages.
- The reference in `href` must include a file path which is **relative to the location of the html file you are currently visiting.**

‌

## **The target attribute**

Don't send the visitors away from your site, change the default link behaviour:



- By default hyperlinks will **replace the page** you are currently visiting with a new one.
- If you are referencing an external website this is undesirable because **it will send the user away from your site.**
- Use the `target=` attribute with the value of `"_blank"` to avoid this.
- This is not necessary if the link is sending the user to **another page on your site.**



```html
<a href="https://www.w3schools.com" target="_blank">Check the Documentation</a>
```



<br>

## Link titles

It's possible to give extra information about the link with the `title` attribute.



- This is helpful to further describe the purpose of a hyperlink or where the link will send the user



```html
<a href="https://www.w3schools.com" title="Go to W3Schools for more info">
Check the Documentation</a>
```



<br>

## Email links

Create links that open an new outgoing email message rather than linking to another page.

Using the <a> element and the `mailto: URL` syntax:



```html
<a href="mailto:mauricio.buschinelli@johnabbott.qc.ca">Send email to Mauricio</a>
```



<br>

## Further Reading

Check-out the links below to review or dig deeper into the Anchor `<a>` tag:

‌

- [**HTML Links tutorial**](https://www.w3schools.com/html/html_links.asp) by W3School's
- [**Creating hyperlinks**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) by MDN Web Docs



<br>

# Images <img>

![img](https://blobs.gitbook.com/assets%2F-LzKOwj7ftX4mKfA3Iuu%2F-Lzql0FsMXBZE5RPkSl-%2F-LzqqDXXr8ZgyW8w95aq%2Fimage.png?alt=media&token=27540971-f493-4b17-8a1f-30c46bbeb2c3)



> Do not add "*Image of...*" or "*Picture of..."*  in the alt description.



It' is unnecessary since the `` tag make that fact obvious.

‌

<br>

## **Image sizing**



It is possible to size your image with the `width=` and `height=` attributes. The attribute values are specified in pixels but units are not included:



```html
<img src="./mylogo.png" alt="company logo" width="150" height="100">
```



<br>



Although you can size images in the HTML element, it is recommended to specify the image size via CSS styles.

<br>



## Images as a Link

‌To use an image as a link, put the `` tag inside the `` tag. This will create a clickable image that will send the user to another page:



```html
<a href="https://www.johnabbott.qc.ca/academics/career-programs/computer-science-technology/">
  <img src="jac_sc.png" alt="jac's comp scie program title">
</a>
```



<br>

 [![img](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LzKOwj7ftX4mKfA3Iuu%2F-Lzql0FsMXBZE5RPkSl-%2F-LzqwBLls9g24yyS_s4W%2Fimage.png?alt=media&token=7534f2a9-ad89-4528-82ae-aa7971c1a5b5) ](https://www.johnabbott.qc.ca/academics/career-programs/computer-science-technology/)



<br>‌

## Further Reading

‌

Check-out the links below to review or dig deeper into the image `` tag:

‌

- [**HTML Images tutorial**](https://www.w3schools.com/html/html_images.asp) by W3School.
- [**Images in HTML tutorial**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) by MDN Web Docs



<br>

# Hands-on



## Activity 1: VS Code



Recreate the site done during the live demo (see image below)

‌

- Use the 'auto-complete' feature as much as possible
- Make sure to use the **Ctrl + Enter** shortcut.



![img](https://blobs.gitbook.com/assets%2F-LzKOwj7ftX4mKfA3Iuu%2F-Lzgevn0iylAKGmAUFVv%2F-LzghU91_k8T5dLR1jcb%2Fimage-20200128092822904.png?alt=media&token=75d138be-c1e7-46b4-896f-bc6955f8deea)



<br>

## Activity 2: Hyperlinks

‌

**Setting up the file structure:**

‌

- Create two pages, within the following directory structure:

  

![img](https://blobs.gitbook.com/assets%2F-LzKOwj7ftX4mKfA3Iuu%2F-Lzgu8sCn92emaOKi7Qf%2F-Lzgw2GxEgQxtVecl9Y1%2Fimage.png?alt=media&token=79c35d57-ef88-4615-ba04-30e41b750793)



 **Inside *index.html* add the following:**



- An `<h1>` element with the text "External Site"
- A hyperlink pointing to this GitBook page. (include an appropriate description)
- A second `<h1>` element with the text "Local Site"
- A hyperlink pointing to *second_page.html*. (include an appropriate description)



‌

**Inside *second_page.html* add the following:**



- A hyperlink that points to index.html.



<br>

## Activity 3: Exercises



Do the following exercises from W3Schools:

‌

- [HTML Links](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_links1)
  - (except for Exercise 2)
- [HTML Images](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_images1)
  - (except for Exercises 2 and 4)



<br>

## Activity 4: JAC's Hacker Club



Use the content from the zip file below and use it to recreate the home page of the website below:

> [Download website assets here](https://drive.google.com/file/d/111XXSxDL-O7pgIBulJTR1Pv8aPL0O42E/view?usp=sharing).



<br>

### Website requirements



- All references and URLs to links and images **must use a relative path**.
- Use the white-space special symbol to create the spacing between the navigation links (this is a hack, which should not be used once you learn CSS).
- The "Contact" link must lead the user to a contact page that you will create. This "Contact" page should include:
  - The same banner image as the home page.
  - The same navigation links (Home, Tournament, Contact) as the home page.
  - The contact information included in contact.txt
  - Once in the "Contact" page, the "Home" link should bring the user back to the home page.
- The "Tournaments" link should be an empty-link (#).
- The '*Join Us* ' button must lead the user to the same contact page you just created.



![target site](https://blobs.gitbook.com/assets%2F-LzKOwj7ftX4mKfA3Iuu%2F-Lzt-geUoBJu02JBm0fD%2F-Lzt2-1cYPeDSEsRKTxY%2Fimage.png?alt=media&token=c40e3e0b-9f92-489c-8384-2971c3c2d07d)

