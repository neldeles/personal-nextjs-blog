---
date: "2021-07-01T12:23:38"
tags: react, useRef
title: useRef mutable values usecase
published: true
description: Using useRef to store infrastructure data of a component.
aliases:
references:
  ["https://dmitripavlutin.com/react-useref-guide/#2-accessing-dom-elements"]
---

![](/images/useref-mutable-1.jpg)
I have the following table. When a `plus` button is clicked, I'd like to pass the table ID (category group ID) that button is located in to a payload.

For example, if I click **1**, the Tours ID is passed. I initially did this by using `useState` and creating an `activeCategoryGroupID` state.

```js {4}
const [activeCategoryGroup, setActiveCategoryGroup] = useState(null);

const payload = {
  category_group_id: activeCategoryGroup,
};

const handleModal = (categoryGroupId) => {
  setActiveCategoryGroup(categoryGroupId);
  setOpen(true);
};
```

But this causes a needless re-render each time the button is clicked. This is actually a perfect usecase for the `useRef` hook.

As explained [here](https://dmitripavlutin.com/react-useref-guide/#2-accessing-dom-elements),

> So, the 2 main differences between state and references:
>
> 1.  Updating state triggers a component re-rendering, while updating a reference doesn’t trigger
> 2.  The state update is asynchronous (the state variable is updated after re-rendering), while the reference update is synchronous (the updated reference value is available right away).
>
> From a higher point of view, references are used to store infrastructure data of the component, while the state stores information that is directly rendered on the screen.

Our refactored code now looks like this:

```js
const activeCategoryGroupRef = useRef(null);

const payload = {
  category_group_id: activeCategoryGroupRef.current,
};

const handleModal = (categoryGroupId) => {
  activeCategoryGroupRef.current = categoryGroupId;
  console.log(activeCategoryGroupRef);
  setOpen(true);
};
```

blahblah

```js
const activeCategoryGroupRef = useRef(null);

const payload = {
  category_group_id: activeCategoryGroupRef.current,
};

const handleModal = (categoryGroupId) => {
  activeCategoryGroupRef.current = categoryGroupId;
  console.log(activeCategoryGroupRef);
  setOpen(true);
};
```

```py
# Some python code
def name():
  print('my name is noel')
```
