var currentState = {};

function requestState(currentState, receivedState) {
  return new Promise(function (fulfill) {
    $.ajax({
      method: 'GET',
      url: '/memories'
    }).done(function(receivedState) {
      fulfill(receivedState);
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
