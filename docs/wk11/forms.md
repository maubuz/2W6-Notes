This lesson was based on the page [Web forms — Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms) by MDN web docs



# Web Forms

Forms allow users to enter data, which is generally sent to a web server for processing and storage, or used immediately on the browser to update the interface (normally done with JavaScript).

<br>

HTML forms are made primarily of 4 components:



1. One `<form>` container element that wraps all other elements;
2. One or more `<input>` element where users enter data;
3. A special submit `<input>` element or a `<button>` element for triggering the submission;
4. `<label>` elements that visually identifies the `<input>` elements

<br>

Let's look at a basic `<form>`:

<iframe height="370" style="width: 100%;" scrolling="no" title="wk11-forms-ex1" src="https://codepen.io/maujac/embed/bGVgKma?height=370&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/bGVgKma'>wk11-forms-ex1</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

A few notes about this form:

- The `<form>` is a `block` level element, **however, it's items are `inline` elements.**
- The labels must have the same name as their respective inputs;
- The `<form>` container and it's children can be styled as usual via CSS;
- Notice the `focus` "glow" when an `<input>`  is selected.

<br>

Now we will look at each form component in a little more detail:

<br>

# &lt;form&gt; Element

As mentioned, the the `<form>` tag is used to create an HTML form for user input.



>  The most important attributes of `<form>`  is `action` , which defines the URL of where to send the data.

<br> The URL usually points to a server-site script which will parse the data (categorizer it) and store it.

In this course we will not look at server side processing. Typical languages used for this are PHP, Python, Ruby and JavaScript (via NodeJs frameworks like Express).

<br>

The `<form>` element can receive the following attributes:

| Attribute                                                    | Value                                                        | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [accept-charset](https://www.w3schools.com/tags/att_form_accept_charset.asp) | *character_set*                                              | Specifies the character encodings that are to be used for the form submission |
| [action](https://www.w3schools.com/tags/att_form_action.asp) | *URL*                                                        | Specifies where to send the form-data when a form is submitted |
| [autocomplete](https://www.w3schools.com/tags/att_form_autocomplete.asp) | on off                                                       | Specifies whether a form should have autocomplete on or off  |
| [enctype](https://www.w3schools.com/tags/att_form_enctype.asp) | application/x-www-form-urlencoded  multipart/form-data  text/plain | Specifies how the form-data should be encoded when submitting it to the server (only for method="post") |
| [method](https://www.w3schools.com/tags/att_form_method.asp) | get       post                                               | Specifies the HTTP method to use when sending form-data      |
| [name](https://www.w3schools.com/tags/att_form_name.asp)     | *text*                                                       | Specifies the name of a form                                 |
| [novalidate](https://www.w3schools.com/tags/att_form_novalidate.asp) | novalidate                                                   | Specifies that the form should not be validated when submitted |
| [target](https://www.w3schools.com/tags/att_form_target.asp) | _blank       _self       _parent       _top                  | Specifies where to display the response that is received after submitting the form |



<br>

# The Method Attribute

One important mention is that the `method` attribute specifies the HTTP method (**GET** or  **POST**) to be used when submitting the form data.



> This determines whether the submitted data is visible in the URL bar (ei. to the user) or not.

<br>

`method` used GET by default. Always use POST if the form data contains sensitive or personal information. Ideally, encrypt the data by using an HTTPS certified URL.

<br>

**Notes on GET:** 

- Appends form-data into the URL in name/value pairs
- The length of a URL is limited (2048 characters)
- Never use GET to send sensitive data! (will be visible in the URL)
- Useful for form submissions where a user wants to bookmark the result
- GET is better for non-secure data, like query strings in Google



**Notes on POST:** 

- POST has no size limitations, and can be used to send large amounts of data.
- Form submissions with POST cannot be bookmarked



<br>

# &lt;input&gt; Element

The `<input>` element can be displayed in several ways, depending on the `type`  attribute.

By default the `type` attribute is "text".



There are many values that  `type` can take, we will focus on the following:

- Radio Buttons
- E-mail
- Search
- Submit Button



<br>

The input can take the following values:

<br>

| Value                                                        | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [button](https://www.w3schools.com/tags/att_input_type_button.asp) | Defines a clickable button (mostly used with a JavaScript to activate a script) |
| [checkbox](https://www.w3schools.com/tags/att_input_type_checkbox.asp) | Defines a checkbox                                           |
| [color](https://www.w3schools.com/tags/att_input_type_color.asp) | Defines a color picker                                       |
| [date](https://www.w3schools.com/tags/att_input_type_date.asp) | Defines a date control (year, month, day (no time))          |
| [datetime-local](https://www.w3schools.com/tags/att_input_type_datetime-local.asp) | Defines a date and time control (year,  month, day, time (no timezone) |
| [email](https://www.w3schools.com/tags/att_input_type_email.asp) | Defines a field for an e-mail address                        |
| [file](https://www.w3schools.com/tags/att_input_type_file.asp) | Defines a file-select field and a "Browse" button (for file uploads) |
| [hidden](https://www.w3schools.com/tags/att_input_type_hidden.asp) | Defines a hidden input field                                 |
| [image](https://www.w3schools.com/tags/att_input_type_image.asp) | Defines an image as the submit button                        |
| [month](https://www.w3schools.com/tags/att_input_type_month.asp) | Defines a month and year control (no timezone)               |
| [number](https://www.w3schools.com/tags/att_input_type_number.asp) | Defines a field for entering a number                        |
| [password](https://www.w3schools.com/tags/att_input_type_password.asp) | Defines a password field                                     |
| [radio](https://www.w3schools.com/tags/att_input_type_radio.asp) | Defines a radio button                                       |
| [range](https://www.w3schools.com/tags/att_input_type_range.asp) | Defines a range control (like a slider control)              |
| [reset](https://www.w3schools.com/tags/att_input_type_reset.asp) | Defines a reset button                                       |
| [search](https://www.w3schools.com/tags/att_input_type_search.asp) | Defines a text field for entering a search string            |
| [submit](https://www.w3schools.com/tags/att_input_type_submit.asp) | Defines a submit button                                      |
| [tel](https://www.w3schools.com/tags/att_input_type_tel.asp) | Defines a field for entering a telephone number              |
| [text](https://www.w3schools.com/tags/att_input_type_text.asp) | Default. Defines a single-line text field                    |
| [time](https://www.w3schools.com/tags/att_input_type_time.asp) | Defines a control for entering a time (no timezone)          |
| [url](https://www.w3schools.com/tags/att_input_type_url.asp) | Defines a field for entering a URL                           |
| [week](https://www.w3schools.com/tags/att_input_type_week.asp) | Defines a week and year control (no timezone)                |



<br>

<iframe height="866" style="width: 100%;" scrolling="no" title="wk11-radio_email_search-ex2" src="https://codepen.io/maujac/embed/WNQRKpY?height=866&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/WNQRKpY'>wk11-radio_email_search-ex2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

The `<input>` can also be used as button in order to **submit the form or to trigger an event** (using JavaScript):

<br>

<iframe height="357" style="width: 100%;" scrolling="no" title="wk11-input_button-ex3" src="https://codepen.io/maujac/embed/JjYEaLZ?height=357&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/JjYEaLZ'>wk11-input_button-ex3</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

In addition, the [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element can also be used to submit the form. The main difference between the `<button>` and the `<input type="submit">`  is that the `<button>` element can take other elements inside, such as icons or images.

<br>

<iframe height="262" style="width: 100%;" scrolling="no" title="Searchbar demo" src="https://codepen.io/maujac/embed/QWjjjda?height=262&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/QWjjjda'>Searchbar demo</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>



# &lt;textarea&gt; Element

The `<textare>` element provides a multi-line text field for larger messages:

<br>

<iframe height="360" style="width: 100%;" scrolling="no" title="wk11--ex4" src="https://codepen.io/maujac/embed/yLYgRxx?height=360&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/yLYgRxx'>wk11--ex4</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

# Placeholder and default text

To define the default value of an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element you have to use the `value` attribute:

<br>

<iframe height="330" style="width: 100%;" scrolling="no" title="wk11-placeholder_defaults-ex5" src="https://codepen.io/maujac/embed/BaopGZP?height=330&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/BaopGZP'>wk11-placeholder_defaults-ex5</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

# Built-in form validation

One of the most significant features of [HTML5 form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types) is the ability to validate most user data without relying on  JavaScript.

This is done by using validation attributes on form  elements:



- `required`: Specifies whether a form field needs to be filled in before the form can be submitted.
- `minlength` and `maxlength`: Specifies the minimum and maximum length of textual data (strings)
- `min` and `max`: Specifies the minimum and maximum values of numerical input types
- `type`: Specifies whether the data needs to be a number, an email address, or some other specific preset type. 
- `pattern`: Specifies a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that defines a pattern the entered data needs to follow.



<br>

<iframe height="386" style="width: 100%;" scrolling="no" title="wk11-required-ex6" src="https://codepen.io/maujac/embed/OJyWaoB?height=386&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/OJyWaoB'>wk11-required-ex6</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>



# References & Diving Deeper

Recommended readings:



 -   [Web forms — Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms) by MDN web docs
 -   [Form Design Patterns Book Excerpt: A Registration Form](https://www.smashingmagazine.com/2018/10/form-design-patterns-excerpt-a-registration-form/) by Smashing Magazine



<br>

 Recommended video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/E5MEzC0prd4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>

# Hands-on



## Exercises

Complete the following exercises from W3C Schools:

1. [HTML Forms](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_forms1)
2. [Form Elements](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_form_elements1)
3. [Input Types](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_form_input_types1)
4. [Form Attributes](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_form_attributes1)






