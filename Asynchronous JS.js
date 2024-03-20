// njareb wa7di
const oddDouble = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      reject(new Error(`${number} is even`));
    } else {
      resolve(number);
    }
  })
    .then((originalNumber) => {
      console.log(`Original number: ${originalNumber}`);

      console.log(`First double: ${originalNumber * 2}`);
      return originalNumber * 2;
    })
    .then((samiElit7eb) => {
      console.log(`Second double: ${samiElit7eb * 2}`);
      return samiElit7eb * 2;
    })
    .then((samiElit7eb) => {
      console.log(`Third double: ${samiElit7eb * 2}`);
      return samiElit7eb * 2;
    })
    .catch((error) => {
      throw error;
    });
};

// Checkpoint Asynchronous Programming
// Task 1:

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
async function iterateWithAsyncAwait(array) {
  for (let value of array) {
    console.log(value);
    await delay(1000);
  }
}

// Task 2:

const fetchData = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Data fetched from number");
    }, 1000)
  );
};
async function awaitCall() {
  const response = await fetchData();
  console.log(response);
}

// Task 3:

function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data has been fetched successfully in area 1");
      } else {
        reject("Failed to fetch data in area 1");
      }
    }, 1000);
  });
}
function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data has been fetched successfully in area 2");
      } else {
        reject("Failed to fetch data in area 2");
      }
    }, 1000);
  });
}
function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("Data has been fetched successfully in area 3");
      } else {
        reject("Failed to fetch data in area 3");
      }
    }, 1000);
  });
}
async function awaitCall2() {
  try {
    const response1 = await fetchData1();
    console.log(response1);

    const response2 = await fetchData2();
    console.log(response2);

    const response3 = await fetchData3();
    console.log(response3);
  } catch (error) {
    console.error("An error occured:", error);
  }
}

// Task 4:

function dataFetch(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0) {
        resolve(number);
      } else {
        reject(`${number} is below zero`);
      }
    }, 2000);
  });
}
async function concurrentRequests() {
  try {
    const [result1, result2] = await Promise.all([dataFetch(5), dataFetch(7)]);
    console.log(`The numbers greater than zero are: ${result1} and ${result2}`);
  } catch (error) {
    console.error("An error occured", error);
  }
}

// Task 5:

function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 2000);
  });
}

async function parallelCalls(urls) {
  try {
    const promises = urls.map((url) => fetchData(url));
    const responses = await Promise.all(promises);
    console.log("Responses:", responses);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}