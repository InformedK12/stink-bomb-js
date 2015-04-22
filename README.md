# StinkBomb (JS version)

[![Build Status](https://travis-ci.org/ChalkSchools/stink-bomb-js.svg?branch=master)](https://travis-ci.org/ChalkSchools/stink-bomb-js)
[![Code Climate](https://codeclimate.com/github/ChalkSchools/stink-bomb-js/badges/gpa.svg)](https://codeclimate.com/github/ChalkSchools/stink-bomb-js)
[![Test Coverage](https://codeclimate.com/github/ChalkSchools/stink-bomb-js/badges/coverage.svg)](https://codeclimate.com/github/ChalkSchools/stink-bomb-js)

Create a `StinkBomb` that will throw an error if your code is out of date.
Useful for when you have code that should be addressed in the near future,
and you want this code to fail CI when it gets too stinky.

## Installation

Add this line to your application's Gemfile:

```bash
npm install stink-bomb --save-dev
```

## Usage

```js
var StinkBomb = require('stink-bomb');
StinkBomb.create('January 20, 2001')
```

## Contributing

1. Fork it ( https://github.com/ChalkSchools/stink-bomb-js/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
