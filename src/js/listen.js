var currentState = {};

function mergeState(newState) {
  currentState = newState.slice(currentState.length, newState.length);
  return currentState;
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

function listen() {
  return new Promise(function (fulfill) {
    requestState().then(function(newState) {
      fulfill(newState);
    });
  });
}

export { listen };
