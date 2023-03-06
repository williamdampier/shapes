# Shapes

### Install instructions
Test task is implemented using yarn package manager.
To deploy project run in the root folder :
 `yarn`

 after all packages are installed run:
 `yarn dev`

NPM should also work: 
 `npm install`

### What can be done to make it better (from my perspective)

1. Styling 
2. Implement Redux (or any other state manager) to perform async fetch in a a better way: handle rejected and pending Promises, handle possible errors
3. Again use State manager to avoid props drilling by dispatching actions and getting data via selectors
4. From composition point of view - table cells and list items can be moved to a separate component to make future tests run on smaller (and easier to debug) scale
5. Better types structure to avoid checking if components exist in high level components


