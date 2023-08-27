import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
const Grocery = lazy(() => {
  return import("./components/Grocery");
});
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";

//redux configuration
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import UseMemoDemo from "./components/UseMemoDemo";
import UseRefDemo from "./components/UseRefDemo";
// React-core Syntax used to create heading

// const heading = React.createElement("h1", { id: "heading", style: { background: "white", color: "red" } }, "Hello world from React! 🚀"),
//   child = React.createElement("div", { id: "child" }, [heading, heading]),
//   parent = React.createElement("div", { id: "parent" }, [child, child]),

// JSX Syntax used to create heading (parcel transpiled this code before it reaches JS engine)
//Babel transpiles it to React.createElement ==> ReactElement - JS Object ==> HTMLElement(render)
// const para = <p>Paragraph</p>;

// const heading = (
//     <div>
//       {para}
//       <h1 id="heading">Namaste React Using JSX 🚀</h1>
//       <input type="text" />
//       <select>
//         <option>Hello ONE</option>
//         <option>Hello TWO</option>
//       </select>
//       <img src="https://d33wubrfki0l68.cloudfront.net/377d727c8d878832f20e08939889a58bdff0b3f2/63787/img/babel.svg" />
//     </div>
//   ),
//   HeadingComponent1 = () => <h1>Heading Text</h1>,
//   //Component Composition
//   HeadingComponent = () => (
//     <div>
//       {heading}
//       <h1>Functional Component</h1>
//       <h1>Functional Component</h1>
//       <HeadingComponent1 /> //Component Composition
//     </div>
//   ),
//   HeadingComponent2 = () => {
//     return <h1>Heading Text</h1>;
//   };

// const heading1 = React.createElement(
//   "h1",
//   { className: "title" },
//   "H1 Heading"
// );

// const heading2 = React.createElement(
//   "h2",
//   { className: "title" },
//   "H2 Heading"
// );

// const heading3 = React.createElement(
//   "h3",
//   { className: "title" },
//   "H3 Heading"
// );

// const parent = React.createElement("div", { class: "title" }, [
//   heading1,
//   heading2,
//   heading3,
// ]);
// const parent = (
//   <div class="title">
//     <h1>Heading H1</h1>
//     <h2>Heading H2</h2>
//     <h3>Heading H3</h3>
//   </div>
// );
// const HeadingComponent = () => (
//   <div>
//     <h1>Heading H1</h1>
//     <h2>Heading H2</h2>
//     <h3>Heading H3</h3>
//   </div>
// );
// const Parent = () => (
//   <div>
//     Paragraph
//     <HeadingComponent></HeadingComponent>
//   </div>
// );

// const logo = (
//   <img
//     src="https://d33wubrfki0l68.cloudfront.net/377d727c8d878832f20e08939889a58bdff0b3f2/63787/img/babel.svg"
//     alt="no-image"
//     width="20%"
//   />
// );

// const searchBar = <input type="text" />;

// const userIcon = (
//   <img
//     src="https://media.istockphoto.com/id/1456958545/photo/photo-of-young-asian-businesswoman-holding-smartphone-on-background.jpg?s=1024x1024&w=is&k=20&c=okE_vIkUJW0kVLx4rk4CL3-I_ogdpB3qPLLt23K9z_Y="
//     width="20%"
//     height="150px%"
//     style={{ "border-radius": "50%" }}
//   />
// );

// const Container = () => (
//   <div id="container">
//     {logo}
//     {searchBar}
//     {userIcon}
//   </div>
// );
// console.log(heading) // heading is on object

const AppLayoutComponent = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //api call to get authenticate user
    //update data of authenticate user
    const data = {
      name: "Yogesh Kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "Somdev", setUserName }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurent/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/demo",
        element: (
          <>
            <UseMemoDemo /> <UseRefDemo />
          </>
        ),
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); //this will convert object to h1 element and render on DOM
