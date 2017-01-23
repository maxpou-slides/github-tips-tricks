
sleep = (ms) => {
  return new Promise(r => setTimeout(r, ms))
};

sleep(100)
  .then(function STEP2 () {
    console.log("step 2 (after 100ms)");
    return sleep(200);
  })
  .then(function STEP3 () {
    console.log("step 3 (after another 200ms)");
  })
  .then(function STEP4 () {
    console.log("step 4 (next Job)");
    return sleep(50);
  })
  .then(function STEP5 () {
    console.log("step 5 (after another 50ms)");
  })
