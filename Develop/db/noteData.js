// ===============================================================================
// DATA
// Below data will hold all of the notes.
// But you could have it be an empty array as well.
// ===============================================================================

var notesArray = [
  {
    subjectName: "Notes 1",
    date: "06/04/2020",
    message: "type note here",

  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = notesArray;
