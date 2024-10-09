// making Promise with given params
const fetchDataPromise = (arg1) => {
  console.log("given arg1: ", arg1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("you can do smth with given arg1: ", arg1);

      const success = true; // Simulate a success scenario
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); // Simulates a 2-second delay
  });
};

fetchDataPromise("/data/file.txt")
  .then((result) => {
    console.log(result); // Output: 'Data fetched successfully!'
  })
  .catch((error) => {
    console.error(error); // If failed, this will handle the error
  })
  .finally(() => {
    console.log("Operation completed"); // Runs regardless of the outcome
  });

console.log(
  "\n--------------------------------async await--------------------------"
);
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate a success scenario
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); // Simulates a 2-second delay
  });
};

const getData = async () => {
  try {
    const result = await fetchData();
    console.log(result); // Output: 'Data fetched successfully!'
  } catch (error) {
    console.error(error); // If failed, this will handle the error
  } finally {
    console.log("Operation completed"); // Runs regardless of the outcome
  }
};

getData();
