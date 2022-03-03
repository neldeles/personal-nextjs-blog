---
date: '2021-06-28T17:36:08'
tags: ['twin', 'tailwind', 'react']
title: Enabling animations of TailwindUI in Twin 
published: true
description: "Enabling the animation of TailwindUI's react components in Twin"
aliases:
references: ['https://github.com/ben-rogerson/twin.macro/issues/349']
---

The problem stems from the fact that [the classes aren't pulled in by twin since they are not applied using `tw`.](https://github.com/ben-rogerson/twin.macro/discussions/394#discussion-3324703).

Here's the [solution](https://github.com/ben-rogerson/twin.macro/issues/349#issuecomment-790856038) as suggested by Ben Rogerson (creator of the Twin library) himself:

With Emotion you can use their ClassNames import:
```js
import { ClassNames } from '@emotion/react'

<ClassNames>
  {({ css }) => (
    <Transition
      show={isOpen}
      enter={css(tw`transform transition ease-out duration-200`)}
      enterFrom={css(tw`opacity-0 translate-y-1`)}
      enterTo={css(tw`opacity-100 translate-y-0`)}
      leave={css(tw`transform transition ease-in duration-150`)}
      leaveFrom={css(tw`opacity-100 translate-y-0`)}
      leaveTo={css(tw`opacity-0 translate-y-1`)}
      tw="absolute z-10 -ml-4 mt-3 w-screen max-w-md lg:max-w-3xl"
    >
      <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        <!-- snip -->
      </div>
    </Transition>
  )}
</ClassNames>
```

# Footer
---
Related: 