const axios = require('axios');

/* issue: token is passed as an argument, instead the SDK should
be initialized as a class and its instance will carry the authentication
so no token passed to the functions. Reasons: 1) tokens are temporarily
2) it's a bad practice to send auth information as a parameter

issue: no sanitization of the input, we should have a validator like
 joi/express-validor/zod
 to make sure the input is safe, has correct type, is valid (has data)
  and if not return a 400 Bad Request error (semantic error)
Reasons: prevent SQL/command injections, leave parameters ready to be used
by the functions and removes the validation logic from them, making it 
more readable.

issue: Base url should be a constant outside the function and its
variable be used by many functions. Reason: prevents code duplication
and one place to change base url for the whole SDK

issue: no try/catch to catch errors of the request (promise)
Reason: errors will break the function, they should be instead handled 
gracefully

issue: no logging, so when dubugging there's no way to know what's going
on. Reason: helps on debugging and tells the user what's going on with 
the function

issue: before returning, should check if data exists
Reason: prevents sending internal responses or broken data as a result

issue: lacks documentation. Reason: Tells the user how to use the function
what is its purpose, specifies parameters names and types accepted,
tells what are the expected responses

*/ 

async function fetchUserData(token, userId) {
  const url = `https://api.example.com/user/${userId}`;
  const headers = {
    'Authorization': token,
    'Content-Type': 'application/json'
  };

  const response = await axios.get(url, { headers });
  return response.data;
}

module.exports = { fetchUserData };
