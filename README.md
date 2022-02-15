# Aptitude test for EE

You will need to ensure you have Node v12 or higher installed `node -v` as this application is written for es6.

> Start the server with `npm start`

> Start development mode with `npm run dev`

The tests are fairly comprehensive and demonstrate that all steps given in the requirements were fulfilled. 

> Run tests with `npm t`

## Rationale

As the instruction required simplicity in architecture and the problem case was simple I opted to use 'plain js' rather than TypeScript as I felt it would be overkill.

I also opted to keep the API lean and build functions as pure and generic as possible with few side effects except in those that check the dataset.

## Review

As the algo was fairly straightforward I was able to implement a generic solution that met the spec fairly quickly and so spent the remaining time ensuring the API was robust and edge cases were covered.

I worked test-first on the endpoints but did not leave myself enough time to go back and implement unit-tests on the conversion services and mock the functions in controller once I had broken them out into their own functions. However as the endpoint tests are end-to-end coverage is complete (`npm run test:coverage`).

Given more time I would only implement mocks and add unit tests as I am happy the API is robust and feature complete as far as the brief. I would consider encapsulating the error handling within the service functions, but the current approach offers more descriptive errors with less overhead which is more in line with the requirements for simplicity.

> version: 5b8d0fd276b6d288905ed2f63a934e057e8feca2
