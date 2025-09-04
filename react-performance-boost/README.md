# React Performance-Boost Portfolio Project

This project demonstrates how to identify and fix three common and critical performance issues in a React web application. The repository contains the final, optimized code.

## The "Before" State: The Problems

The initial application was built with three intentional performance bottlenecks:

1.  **Slow Initial Load:** The homepage included a very large, unoptimized image (several MBs), causing long load times, especially on slower connections.
2.  **UI Freezing:** A "Long List" page attempted to render 10,000 items at once, causing the browser to freeze for several seconds and making scrolling impossible.
3.  **Janky Animations:** An animation page used inefficient JavaScript (`setInterval` and state updates) to animate the `left` CSS property, resulting in stuttering and dropped frames.

## The "After" State: The Solutions

I applied modern web development techniques to solve each of these issues, resulting in a fast, smooth, and professional user experience.

1.  **Image Optimization & Lazy Loading:**
    *   The large JPG was compressed and converted to the modern **WebP** format, reducing its file size by over 90%.
    *   The `loading="lazy"` attribute was added to the `<img>` tag, telling the browser to only download the image when it was about to enter the viewport.

2.  **List Virtualization:**
    *   To fix the freezing UI, I implemented **list virtualization** using the `@tanstack/react-virtual` library.
    *   This technique ensures that only the items currently visible on the screen are rendered to the DOM, allowing the application to handle lists of any size instantly.

3.  **Hardware-Accelerated CSS Animations:**
    *   The janky JavaScript animation was completely replaced with a pure CSS animation.
    *   By using the `transform: translateX()` property instead of `left`, the animation is offloaded to the GPU, guaranteeing it runs smoothly without causing unnecessary React re-renders.

## How to Run This Project

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Run the development server: `npm run dev`