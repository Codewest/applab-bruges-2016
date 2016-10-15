function mergeState(newState) {
  var mergedState = newState;
  return mergedState;
}

function requestState(currentState, receivedState) {
  return new Promise(function (fulfill) {
    $.ajax({
      method: 'GET',
      url: '/memories'
    }).done(function(receivedState) {
      var mergedState = mergeState(receivedState);
      fulfill(mergedState);
    });
  });
}

function listen(currentState) {
  return new Promise(function (fulfill) {
    requestState(currentState).then(function(newSate) {
      fulfill(newState);
    });
  });
}

export { listen };
