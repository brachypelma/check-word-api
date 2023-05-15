# Check Word API

This is a [Spin](https://developer.fermyon.com/spin/index) application deployed to the [Fermyon Cloud](https://developer.fermyon.com/cloud/index) used to filter a list of input strings by those considered valid words according to a common word game dictionary.

## Requests

Make requests to the API endpoint like this:

`https://www.example.com?s=string,other,strings`

Your request must include only one URI query, `?s=`, following by a comma-separated list of strings to check.

## Responses

The API will split your comma-separated list of strings and return a `response` whose `body` contains an array of all the strings passed in that match strings found in the dictionary.
