

# Json utils

some functions for working with json, including: alphabetizing and camel casing the keys


## including

- [`camelJson(file, data)`](#camelJson-options)
- [`updateCamelJson(file, newFile)`](#updateCamelJson-options) 
- [`alphaJson(file, data)`](#alphaJson-options)
- [`updateAlphaJson(file, newFile)`](#updateAlphaJson-options) 
- [`addAlphaJson(file, newData, newFile)`](#addAlphaJson-options) 



### camelJson(file, data)

- file: string file to write the data to
- data: object data to write to file

### updateCamelJson(file, newFile)

- file: string file to write the data to
- newFile: string new file to write data to - can be the same as original

### alphaJson(file, data)

- file: string file to write the data to
- data: object data to write to file

### updateAlphaJson(file, newFile)

- file: string file to read the data from
- newFile: string new file to write data to - can be the same as original


### addAlphaJson(file, newData, newFile)

- file: string file to read the data from
- newData: new data to be added
- newFile: string new file to write data to - optional, other wise the original file will be used

to publish to npm
$ npm publish --access=public
