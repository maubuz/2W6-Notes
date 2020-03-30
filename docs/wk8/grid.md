# Grid



## Why Grid when we have Flexbox?



![image-20200322204239709](assets/image-20200322204239709.png)

How would you accomplish the layout on the right with flexbox? Lets try it.



## Placing grid items in the Grid

Using the syntax of `grid-column` and `grid-row`  you can explicitely place items in the container.

- The first value is where the grid item will start
- The second value is where the grid will end.



If only one value is given, the grid item will start at that line name.

```css
grid-column: 3;   //The item will start at line 3.
```



If a range of values is given, then the item will 

```css
grid-row:1/3;   // The item will start at line 1 and end at line 3.
```



 

