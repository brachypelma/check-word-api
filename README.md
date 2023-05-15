# Check Word API

This is a [Spin](https://developer.fermyon.com/spin/index) application deployed to the [Fermyon Cloud](https://developer.fermyon.com/cloud/index) used to filter a list of input strings by those considered valid words according to a common word game dictionary.

## Requests

Make requests to the API endpoint like this:

`https://check-word-api-skulfsjy.fermyon.app/?s=string,other,strings`

Your request must include only one URI query, `?s=`, following by a comma-separated list of strings to check.

Strings containing characters other than A-Z or a-z will be ignored.

## Responses

The API will split your comma-separated list of strings and return a `response` whose `body` contains an JSON-stringified array of all the strings passed in that match strings found in the dictionary. All strings passed to the API are converted to lowercase. Any strings passed in that are not found in the dictionary are filterd out.

So, for instance, if you `GET` the following URL:

`https://check-word-api-skulfsjy.fermyon.app/?s=hello,asdfj,WORLD`

You will receive a `response` with the following `body`:

`["hello","world"]`
