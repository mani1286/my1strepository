//useEffect => A React Hook that lets you perform side effects in function components.
//it can be used to fetch data, directly interact with the DOM , and more.it runs after the render is comitted to the screen.
//useEffect()= React hook that tells React DO SOME CODE WHEN (pick one):
//1. After the first render or when the component mounts
//2.After every render or when the component updates
//3. when the componentsunmounts

//useEffect(function, [dependencies]);
//function : The code to run after the render is comitted to the screen
//dependencies: An array of values that the effect depends on. if any of these values change, the effect will run again
//useEffect(() => {}) //runs after every render
//useeffect(() => {},[]) // runs only after the first render or runs only on mount
//useEffect(() =>{},[value]) //runs on mountt and when the value changes

//used in 
//1.data fetching
//2.directly interacting with  the DOM
//3.setting up a PushSubscription
//4.manually changing the DOM

