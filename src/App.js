// center of the application
// the root component, or the wrapper component that houses all of the other components
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // We set the initial value of contactSelected to false to prevent the contact form from showing when a user initially navigates to the homepage
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* This conditional declare that if the contactSelected is false, the Gallery and About components should be rendered, 
        but if contactedSelected is true, the ContactForm component should be rendered. */}
        {!contactSelected ? (
          // React fragments: a tool in React to allow multiple elements to be grouped together
          // Although in JSX you can only return a single parent element, this rule can be satisfied by wrapping the children components in a React fragment
          // This also allows you to wrap elements without creating extra DOM nodes
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
          // : is a ternary operator that enables conditional rendering for React
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
