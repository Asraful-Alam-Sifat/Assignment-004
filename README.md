# Answers

# 1. The difference between? 
    --> getElementById() :- This Only Support a Unique id and it return a single Element.
    --> getElementsByClass() :- This only support class names searches, This return an HTML Collection. This will automatically update if elements are added or removed later.
    --> #querySelector() :- This supports all CSS selectors like [#id, .class, <tag>], and it also returns a single  Element. but if we use a class that given to many Element  it only gives the first Element.
    --> querySelectorAll() :- This also supports all selectors that's supports querySelector(), and it gives a Collection similler to HTML Collection but completely not the same. This do not update if elements are added or removed later.

# 2. create and insert a new element into the DOM?
   const newElement = document.createElement("div");
   newElement.innerContent = "Inner Content";
    document.append(newElement);

# 3. Event Bubbling? And how does it work?
    --> Event Bubbling :- When an Event happens on an Element it automaticlly bubbles up to it's parent Element.
    -->  How it works :- click a button inside a div triggers the button click Event first and than it go to it parent container active the parent click Event. this keep triggering all parent click event like that until we stops it using Event.stopPropagation()

# 4. Event Delegation in JavaScript?
   --> Event Delegation :- Event Delegation in javascript is a technique where we add a single event listener to the parent container instead of adding a separate event listener to each of the child elements.
   --> Advantages :- less code, Better performance.

# 5. difference between preventDefault() and stopPropagation()?
   --> preventDefault() :- this methode stops the action of a browser when it starts running an event.
   --> stopPropagation() :- Stops the event from bubbling up to its parents.
