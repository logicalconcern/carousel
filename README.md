# Carousel Test

This repository is intended to demonstrate the implementation of a mobile-first Carousel component via a modern development tooling stack and basic GitHub workflow.

## Getting Started

These instructions will get a copy of the [SPA](https://en.wikipedia.org/wiki/Single-page_application) up and running on your local machine for evaluation purposes.

### Installation

You will need the following software installed on your machine:

* [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Yarn](https://yarnpkg.com/) - Fast, reliable, and secure dependency management.

Once installed, issue the following command via your terminal to launch the application.

```yarn && yarn start```

To publish a production build of the application to the `./target` directory.

```yarn build```

## Requirements

The following requirements lists have been reordered, not to imply any attributted  priority but simply to facilitate more linear discussion in the [Notes](#notes) section   

### Non-functional

* Accessibility
* Responsiveness
* Code structure, quality and consistency
* Cross browser compatibility
* Dependency management 
* Technology choices
* Test quality
* Clear documentation
* Git commit history
* Attention to detail

### Functional

* [x] It should run in the last two versions of Chrome, Firefox, Safari and Edge
* [x] Use `Ropa Sans` as the typeface for the text
* [x] The 'active' carousel item is always centred in its container
* [x] When you click the `prev` button, it should centre the previous item
* [x] When you click the `next` button, it should centre the next item
* [ ] It should switch between mobile and desktop layout depending on the viewport size
* [ ] It should use the SVG provided for the arrow icons (mobile layout only)
* [ ] As you scale up the browser window more of the carousel becomes visible

## Notes

Please find attached below my motivations and general thoughts relating to this test

### Technology Choices

#### Tooling

Facebook's [Create React App](https://facebook.github.io/create-react-app/) has seen impressive adoption over the past few years. 

However, when it comes to specific organisational requirements, my experience is that [extending Create React App](https://medium.com/@chrisjpatty/extending-create-react-app-to-make-your-own-app-generator-5d7b1ddc246) actually offers little net time saving benefit over an explicit configuration, all things considered. Encapsulating a successful build configuration into a singular, versioned CLI utility - using [yargs](http://yargs.js.org/), [execa](https://dustinpfister.github.io/2018/02/28/nodejs-execa/), etc - can offer many [Monorepo](https://medium.com/@maoberlehner/monorepos-in-the-wild-33c6eb246cb9)-esque benefits but encapsulation is best considered after a few reuse iterations anyway.

For this project, I wanted to demonstrate a basic tooling configuration using [Webpack4](https://webpack.js.org/), [Babel7](https://babeljs.io/), [PostCSS](https://postcss.org/), [Eslint](https://eslint.org/) and [Stylelint](https://stylelint.io/), amongst other technologies. The configuration is loosely based on [this article](https://medium.com/@jontorrado/working-with-webpack-4-es6-postcss-with-preset-env-and-more-93b3d77db7b2) with updates and enhancements to support React, in particular some of the unstable features of `React 16.7-alpha`. 

In addition to enabling [CSS Modules](https://github.com/css-modules/css-modules) for atomic encapsulation of components, there are also a couple of React-related Eslint [debugging](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md) and [validation](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md) rules disabled to expedite development (enabled under normal conditions)

As a final aside, I should mention the `resolutions` block in the `package.json` file is currently required due to a [broken release](https://github.com/terser-js/terser/issues/251) of the [terser](https://github.com/terser-js/terser) dependency which has been causing a number of issues over the past few days. 

#### Client

As my architectural experience is primarily [React](https://reactjs.org/) based, it naturally made sense to use the React framework for this excercise too. But why use the Alpha release anyway?

The rise of [Redux](https://redux.js.org/) and [RxJS](https://rxjs-dev.firebaseapp.com/) has lead to React becoming considerably more opinionated with regards to state management in recent times. However, managing state has always been one of the aspects of React that felt more imperative and less functional.

This is why I'm particularly excited about the forthcoming [Hooks]() and [Suspense]() APIs, which both have the potential for simplifying current approaches to async aspects.

Hooks are similar to Redux reducers and compositionally very powerful. With emerging libraries such as [rxjs-hooks](https://github.com/LeetCode-OpenSource/rxjs-hooks), an incredibly powerful, fully fledged [FRP](https://en.wikipedia.org/wiki/Functional_reactive_programming) paradigm is being established.

The Suspense API uses clever caching techniques to elegantly handle network requests for visual assets. The related lifecycle provides an elegeant visual fallback mechanism.

### Further Enhancements

Given the instructions... 

"**It's not important to complete the code** in the time that you have, but it is important that you are able to demonstrate your thinking via documentation and additional information." 

... and the need for a functional application to address certain aspects properly, I decided it would be pragmatic to concentrate on the project tooling and implemention of the core Carousel logic and related visual components. 

The conventional wisdom is that modern SPAs should be built on the foundations of [Accessibility](#accessibility), [Responsiveness](#responsiveness) and [Testing](#testing) as primary concerns. However, as some of the most time sensitive aspects of development, I have instead detailed my thinking below as to how these would be implemented for the project given more time:-

#### Accessibility

As well as the semantic detail and keyboard event capture required to fulfil the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) standards and guidelines, there are many other [design practices](https://hackernoon.com/rems-and-ems-and-why-you-probably-dont-need-them-664b9ce1e09f) and [tools](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en) that would need to be considered to provide an acceptable level of accessibility here.

During my research for this project, I bookmarked the following articles concerned with [Carousel Accessibility](https://www.w3.org/WAI/tutorials/carousels/) and [Flexbox Ordering](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items#The_order_property_and_accessibility) that express most of the basic requirements for the remaining implementation and also potential enhancements that could be made.

#### Responsiveness

By far the most challenging aspect of this test was to consider and implement a mobile first design with nothing detailed in the design brief towards the rules of how the Carousel should behave for CSS breakpoints. 

In these circumstances, iterating with a UX Designer to develop a behavioural specification would be typically be my first port of call - this would also be crucial to the development of any end-to-end test suits that would eventually form part of the CI pipeline.

Regardless, I did consider writing a `useLayout` hook (which could in turn be used in conjunction with a `useResize` hook) or just leveraging raw CSS Media Queries to develop a crude interim solution but it soon became apparent that this would use up too much of the allocated time for the test.

#### Testing

The choices not to use an out-of-the-box tooling solution and leverage an alpha dependency release were, as expected, barriers to implementing working unit tests.

However, a number of authoritative blogs are already publishing on the subject of [testing Hooks](https://blog.kentcdodds.com/react-hooks-whats-going-to-happen-to-my-tests-df4c2b4d67b7). It's also possible to view some [example tests](https://github.com/ilyalesik/react-fetch-hook/blob/master/src/__tests__/useFetch.test.js) from emerging libraries, such as [Rehooks](https://github.com/rehooks) to gain an idea as to how these tests would look for the Carousel app.  

Under real world conditions, testing and performance profiling across a range of platforms, devices and environments would also be critical but require significant infrastructure to do this effectively.