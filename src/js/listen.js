function mergeState(currentState, newState) {
  var mergedState = [];
  for (var i = currentState.length; i < newState.length; i++) {
    mergedState[i] = newState[i];
  }
  console.log(mergedState);
  return mergedState;
}

function requestState(currentState, receivedState) {
  return new Promise(function (fulfill) {
    $.ajax({
      method: 'GET',
      url: '/memories'
    }).done(function(receivedState) {
      var mergedState = mergeState(currentState, receivedState);
      fulfill(mergedState);
    });
  });
}

function listen(currentState) {
  return new Promise(function (fulfill) {
    requestState(currentState).then(function(newState) {
      fulfill(newState);
    });
  });
}

export { listen };
