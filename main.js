console.log("sample text");
const bootstrapBundle = "bootstrap_js/js_bootstrap.bundle.min.js";
fetch(bootstrapBundle)
  .then((response) => {
    // this return required to see the result from fetching
    return response.text();
    // console.log(response);
    console.log("First level return");
  })
  .then((response) => {
    eval(response);
    console.log("Second level return");
  })
  .catch((error) => {
    console.error(
      `An error occured while attempting to load the "${source}" resource!`
    );
    console.error(error);
    console.log("this is error level");
  });
