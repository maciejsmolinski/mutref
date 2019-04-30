var MutRef = function (initialValue) {
  var mutatingValue = initialValue;

  return {
    modify(callback) {
      mutatingValue = callback(mutatingValue);
    },
    get inspect() {
      return mutatingValue;
    }
  };
}

module.exports = MutRef;