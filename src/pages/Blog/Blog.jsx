import React from 'react';
import image1 from '../../assets/images/li1.png';
import image2 from '../../assets/images/li2.png';
import image3 from '../../assets/images/li3.png';
import './Blog.css'

const Blog = () => {
    return (
        <div className='text-justify blog'>
            <div className='my-10'>
                <h1 className='text-3xl text-indigo-700 mb-5'>1. What are the differences between uncontrolled and controlled components?</h1>
                <p>In React, a component can be classified as either controlled or uncontrolled depending on how it handles its state.</p>
                <p>An uncontrolled component is a component that manages its own state internally. It uses the state property to store data that is not directly controlled by React. The component updates the state whenever a user input is made, but React has no control over the state of the component. Examples of uncontrolled components include regular HTML form elements such as input, textarea, and select.</p>
                <p>A controlled component, on the other hand, is a component that relies on its parent or a higher-level component to manage its state. The state is passed down to the controlled component through props, and the component updates the state by calling a callback function provided by the parent. Whenever the state is updated, React re-renders the component with the new data. Examples of controlled components include custom form elements and other complex components.</p>
                <p>The main difference between controlled and uncontrolled components is that with controlled components, the parent component has full control over the data, while with uncontrolled components, the data is managed internally by the component itself. Controlled components are generally preferred for complex components where the data needs to be consistent across the application, while uncontrolled components are useful for simple form elements where a user's input can be validated and processed independently of other components.</p>
            </div>
            <div>
                <h1 className='text-3xl text-indigo-700 mb-5'>2. How to validate React props using PropTypes?</h1>
                <p>PropTypes is a built-in library in React that allows you to validate the props passed to a component. PropTypes can be used to check the type of a prop, whether it is required or optional, and even the shape of an object prop.</p>
                <p>Here's how to use PropTypes to validate props:</p>
                <ol type="1">
                    <li>Import the PropTypes library at the top of the file.</li>
                    <img src={image1} alt="" />
                    <li>Declare the propTypes object at the bottom of the component class:
                    <img src={image2} alt="" />
                    In this example, we have declared three props, prop1, prop2, and prop3. prop1 is a required string, prop2 is an optional number, and prop3 is an object with two properties: nestedProp1, which is an optional string, and nestedProp2, which is a required number.</li>
                    <li>Use your component and pass in the props:
                    <img src={image3} alt="" />
                    In this example, we are passing in the required string prop1, the optional number prop2, and the object prop3 with both nestedProp1 and nestedProp2 defined.</li>
                </ol>
                <p>When a prop fails validation, PropTypes will throw a warning in the console with a description of the expected prop type and a message about which prop failed validation. This helps catch errors early on and makes debugging easier.</p>
            </div>

            <div className='my-10'>
                <h1 className='text-3xl text-indigo-700 mb-5'>3. What are the difference between nodejs and express js.</h1>
                <p>Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side. It is built on the V8 JavaScript engine used in the Chrome browser. Node.js provides several built-in modules that developers can use to build server-side applications, including file system access, networking, and cryptography.</p>
                <p>Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features and tools that make it easier for developers to build web applications using Node.js. Express.js allows developers to define routes, middleware, and handlers for incoming requests, as well as provide a range of functionality for handling HTTP requests and responses, such as URL routing, template rendering, and error handling.</p>
                <p>In summary, Node.js provides the runtime environment to run JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js that provides a set of features and tools to make it easier for developers to build web applications using Node.js.</p>
            </div>

            <div>
                <h1 className='text-3xl text-indigo-700 mb-5'>4. What is a custom hook, and why will you create a custom hook?</h1>
                <p>A custom hook in React is a function that allows you to extract and reuse component logic in a reusable way. Custom hooks are a way to abstract common functionality into a separate module that can be used across multiple components in a React application. By using custom hooks, you can simplify the code in your components and make it more reusable, maintainable, and testable.</p>
                <p>Custom hooks are created to extract and reuse logic that is common to multiple components. For example, if you find yourself repeating the same code in multiple components, you can create a custom hook to extract that logic into a reusable function. This can be especially useful when dealing with complex logic or when working with third-party libraries that require certain patterns or configurations.</p>
                <p>Custom hooks can also be used to abstract away implementation details and provide a simpler, higher-level interface to a particular feature or functionality. For example, you could create a custom hook that handles all the details of working with a particular API or backend service, allowing your components to simply use the hook to access the service without having to worry about the implementation details.</p>
                <p>In summary, custom hooks are a powerful tool in React that allow you to extract and reuse common component logic in a reusable way. They can simplify your code, make it more maintainable, and abstract away implementation details to provide a simpler, higher-level interface to a particular feature or functionality.</p>
            </div>
        </div>
    );
};

export default Blog;