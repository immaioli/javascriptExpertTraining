const { error } = require("./src/constants");
const File = require("./src/file")
const assert = require('assert')

// IFEE
;(async () => {
  
    // Variables created in this block are only valid during its execution

    // Test case for empty file
  {
    const filePath = "./mock/emptyFile-invalid.csv"
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  // Test case for invalid header
  {
    const filePath = "./mock/invalid-header.csv"
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }


  // Test case for invalid file length
  {
    const filePath = "./mock/fiveItems-invalid.csv"
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }
  

  // Test case for valid file
  {
    const filePath = "./mock/threeItems-valid.csv"
    const expected = [
        { 
            id: '1', 
            name: 'John Doe', 
            profession: 'Software Engineer', 
            age: '30' 
        },
        { 
            id: '2', 
            name: 'Jane Smith', 
            profession: 'Data Scientist', 
            age: '28' 
        },
        { 
            id: '3', 
            name: 'Bob Johnson', 
            profession: 'Product Manager', 
            age: '35' 
        }
    ]
    const result = await File.csvToJSON(filePath)
    await assert.deepStrictEqual(result, expected)
  }

})()