import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  // intercept data from a request
  // optionally, modify the properties in `locals`
  context.locals.user = { id: 1, name: "John Wick" };
  context.locals.welcomeTitle = () => {
    return "Welcome back " + context.locals.user.name;
  };
  context.locals.orders = [
    { id: "order1", items: ["item1", "item2"] },
    { id: "order2", items: ["item3"] },
  ];

  // return a Response or the result of calling `next()`
  return next();
});
