var data = require('../models/puppies');
var tempArray = puppyData.tempPuppyArr, pup,
// addPuppy = new puppyData.Puppy(+puppyID, puppyName, +puppyAge);

module.exports = {
  allGet: function() {
    return tempArray;
  },
  singleGet: function(puppyID) {
    var response;
    pup = tempArray.filter(function(puppy) {
      return puppy.puppyID === +puppyID;
    });
    if (pup.length > 0) {
      return pup[0];
    } else {
      return {message: 'No such puppy.'};
    }
  },
  handlePost: function(puppyID, puppyName, puppyAge) {
    pup = tempArray.filter(function(puppy) {
      return puppy.puppyID === +puppyID;
    });
    if (pup.length > 0) {
      return {
        message: 'Puppy already exists, idiot.'
      };
    } else {
      var addPuppy = new puppyData.Puppy(
        +puppyID, puppyName, +puppyAge
        );
      tempArray.push(addPuppy);
      return {
        message: 'success',
        puppy: addPuppy
      };
    }
  },
  handlePut: function(puppyID, puppyName, puppyAge) {
    pup = tempArray.filter(function(puppy) {
      return puppy.puppyID === +puppyID;
    });
    if (pup.length > 0) {
      return {
        message: 'Puppy already exists, idiot.'
      };
    } else {
     var addPuppy = new puppyData.Puppy(+puppyID, puppyName, +puppyAge);
      tempArray.push(addPuppy);
      return {
        message: 'success', puppy: addPuppy
      };
    }
  },
  handleDelete: function(puppyID) {
    pup = tempArray.filter(function(puppy) {
      return  puppy.puppyID === +puppyID;
    });
    if (pup.length > 0) {
      for (var i = 0; i < tempArray.length; i++) {
        if (tempArray[i].puppyID === parseInt(puppyID)) {
          var tmpPuppy = tempArray.splice(i, 1)[0];
          return {
            message: 'That puppy is gone.',
            puppy: tmpPuppy
          };
        }
      }
    } else {
      return {
        message: 'Puppy ain\'t here.'
      };
    }
  }
};
