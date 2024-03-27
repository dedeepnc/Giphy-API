# [B4] REACT LITE: REACT ARCHITECTURE

  - **NEXT FOCUS:** The **B4** section will shift to understanding standard client-side architecture for React & wider CSS integrations relevant to this term!

&nbsp;

## C. REACT UTILITIES

As discussed, we will briefly note/update our utilities that we will need for our extended build, being only ONE: **Routing with `RRD v6`**

&nbsp;

### 1. OPTIMISING THE ROUTER FOR SCALE

**THEORY:** Early in React, we setup our basic routing which allows our React application to navigate to different URLs & generate a new page component

  - **CURRENTLY:** Our app is fine with the current setup BUT could be optimised further by incorporating a key component of RRD v6, `Outlet`, and using nested `Route`s

**KEY CHANGES:**

  - **OUTLET:** Parent routes render their child routes by rendering an `<Outlet>`.  Think of the `<Outlet>` like `{props.children}` - *we create a space for components/props to render into*, like a parameter.  Outlet functions like this, allowing nested routes to render.

  - **NESTED ROUTE:** `<Route>` elements may be nested to indicate nested UI, which also correspond to nested URL paths.

  - **RRD LINKS:** `<Link>`, much like an anchor tag, is an element that lets the user navigate to another page by clicking or tapping on it.  In react-router-dom, a `<Link>` renders an accessible `<a>` element with a real href that points to the resource it's linking to

    - **LAYMEN:** React is used to generate SPAs that remove the need for page refresh that could reset the app states. The anchor tag's href will trigger page reload WHEREAS RRDs Link (or NavLink) will not, meaning states can be preserved

&nbsp;

**STEPS:**

  - **(a) LAYOUT OUTLET:** Bring in the `<Outlet>` into `Layout` & replace `props.children` (*make sure to import from RRD*)
  
  - **(b) RENDER LAYOUT "ROUTE":** Call a parent `Route`, with a root path BUT renders the `Layout` component.  *This will be a standard open & close tag.*
  
  - **(c) NESTED MAIN ROUTE:** Wrap ALL other `Route`s within the Layout Route.  To ensure our `Home` page still renders on `/`, replace the path with `index`.  This ensures that it will take the `Outlets` place when rendered (*bit confusing!*)

    - **CHANGE:** We also updated a few routes such as `store/products` - make sure to reflect in `Header`!

  - **(d) NOT FOUND CATCHALL:** We also create a new `NotFound.jsx` page & route that to the path of `*`, which acts as a catchall where NO route is matched (*our 404!*)!

  - **(e) UPDATE LINKS:** Go to `Header.jsx` & import in `Link` from RRD.  Then within each `Nav.Link` react-bootstrap component, include `as={Link}` & replace `href` with `to`.

    - **NOTE:** We will no longer use `<a>` elements when relative linking project pages.  Only use `Link` for internal linking!  So for the Button/Link component in the challenge - REMEMBER!

&nbsp;

### 2. STYLING PAGES & COMPONENTS

**THEORY:** With our app setup for styling, we need to do same base CSS styling, to help us when we come to SCSS + good practice!

  - Global stylesheet: All challenges below will use JUST this global stylesheet & we will modularise & scss-ise it in coming weeks!

**CHALLENGES [A]: BUTTON COMPONENT**

  - Using your knowledge of React Components, try to create a reusable Button CSS class, which we can wrap `Links` in, to have them style with your own styling, that matches the sites styling methodology

**CHALLENGES [B]: NAVBAR COMPONENT**

  - Using your knowledge of React-Bootstrap, try to overwrite Bootstrap default styling by targeting relevant classes of the navbar including: 
  
    - `.navbar`, `.navbar-brand`, `nav-link`

    - also remember to update the pseudo-class of `:hover` to adjust colour

**CHALLENGES [C]: NOTFOUND PAGE**

  - Using your knowledge of React in general, update the overall styling of the NEW NotFound page:

    - Feel free to use any of the images included in the `/assets` directory

    - Try to reference the new Button class in this component for the link!

**CHALLENGES [D]: ACCORDION COMPONENT**

  - Using everything you've learned so far, try to now style the Accordion we built! *No solution here - as I want you to try this one if you want to use it!*