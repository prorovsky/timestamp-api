# H1 Timestamp app for freeCodeCamp

User stories:

    1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)

    2) If it does, it returns both the Unix timestamp and the natural language form of that date.

    3) If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage:
* https://prorovsky-timestamp-api.herokuapp.com/January-20-2020
* https://prorovsky-timestamp-api.herokuapp.com/1579467600

Example output:
* { "unix": "1579467600", "natural": "January 20, 2020" }
* { "unix": null, "natural": null }

[you can try it here](https://prorovsky-timestamp-api.herokuapp.com)

OR 

1)clone/download
2)npm install
3)npm start