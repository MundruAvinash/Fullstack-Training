//This block is about the promise and how it will works
//resolve() = success.
//reject() = failure.
//.then() = when it is success then it will execute
//.catch() = when it is failure then it will execute 


/*const order = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Biryani delivered!");
  } else {
    reject("Order failed!");
  }
});

order
  .then((result) => console.log(result))
  .catch((error) => console.log(error));*/

  //fakeApi() is not a real server . the check the server request i have created the fackApi(). 

  

  /*//async/awiat

  function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("User data received");
        }, 2000);
    });
  }

  async function loadUser() {
    console.log("Loading users...");
    const result = await getData();
    console.log(result);
    console.log("Done!");
    
  }

  loadUser();*/


  //Promise.all(): It takes multiple Promises and fulfills when all of them fulfill. If any Promise rejects, the returned Promise rejects.

// async function loadData() {
//     const userPromise = fakeApi("Users");
//     const orderPromise = fakeApi("Orders");
//     const result = await Promise.all([
//         userPromise,
//         orderPromise
//     ]);
//     console.log(result);
    
// }
// loadData();

//Retry logic:
//Retry logic is a technique that attempts an operation again when it fails, until it succeeds or reaches a maximum number of attempts.



//fakeApi() is not a real server . the check the server request i have created the fackApi(). 

//assingment



class ApiError extends Error {
    constructor(message, code = "API_ERROR") {
        super(message);
        this.name = "ApiError";
        this.code = code;
    }
}

// 1. Fake API request with random delay and failure
function fakeApi(data, apiName) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 500;

        setTimeout(() => {
            console.log(`${apiName} responded after ${delay}ms`);

            if (Math.random() < 0.3) {
                reject(
                    new ApiError(
                        `${apiName} failed`,
                        "REQUEST_FAILED"
                    )
                );
            } else {
                resolve(data);
            }
        }, delay);
    });
}

// 2. Users API
function getUsers() {
    const users = [
        { id: 1, name: "Ravi", department: "IT" },
        { id: 2, name: "Priya", department: "HR" },
        { id: 3, name: "Arjun", department: "Sales" }
    ];

    return fakeApi(users, "Users API");
}

// 3. Orders API
function getOrders() {
    const orders = [
        { id: 101, item: "Laptop", amount: 550000 },
        { id: 102, item: "Mouse", amount: 800 },
        { id: 103, item: "Keyboard", amount: 2000 }
    ];

    return fakeApi(orders, "Orders API");
}

// 4. Retry failed API requests
async function retryRequest(apiFunction, maxAttempts = 3) {
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Attempt ${attempt} of ${maxAttempts}`);

            return await apiFunction();
        } catch (error) {
            lastError = error;

            console.log(
                `Attempt ${attempt} failed: ${error.message}`
            );
        }
    }

    throw new ApiError(
        `Request failed after ${maxAttempts} attempts. ` +
        `Last error: ${lastError.message}`,
        "MAX_RETRIES_EXCEEDED"
    );
}

// 5. Load both APIs in parallel
async function loadDashboard() {
    console.log("Loading dashboard...\n");
    console.time("Total loading time");

    try {
        const [users, orders] = await Promise.all([
            retryRequest(getUsers, 3),
            retryRequest(getOrders, 3)
        ]);

        console.log("\n===== USERS =====");
        console.log(users);

        console.log("\n===== ORDERS =====");
        console.log(orders);

        // 6. Calculate total order amount
        const totalAmount = orders.reduce(
            (total, order) => total + order.amount,
            0
        );

        console.log("\nTotal order amount: ₹" + totalAmount);
        console.log("Dashboard loaded successfully!");

    } catch (error) {
        console.error("\nDashboard error:", error.message);
        console.error("Error code:", error.code || "UNKNOWN_ERROR");

    } finally {
        console.timeEnd("Total loading time");
        console.log("Dashboard request completed.");
    }
}

// 7. Start the program
loadDashboard();
