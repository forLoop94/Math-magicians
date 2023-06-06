import React from 'react';

const Home = () => (
  <main>
    <h2>Welcome to our page</h2>
    <p className="home-paragraph">CSS modules is a project that is getting very popular and CRA also supports it by default. In CSS modules your styles are scoped locally. This means that every file has access to a set of styles, there are not global styles, and it avoids collisions and pollution in the global scope (a common problem with CSS). In React all imported CSS rules are globally scoped and available everywhere in the app. However with the use of CSS modules, styles can be locally scoped and made available only to a single component. Thanks to that every component has access to a specific set of styles and these styles. CSS modules is out of the scope of this lesson, but if you are interested, you can check it out as an extra activity in your free time.</p>
  </main>
);

export default Home;
