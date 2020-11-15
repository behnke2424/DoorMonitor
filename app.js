const triggerList = document.querySelector('#trigger-list');

function renderTriggers(doc) {
    let li = document.createElement('li');
    let day = document.createElement('span');
    let hour = document.createElement('span');
    let minute = document.createElement('span');
    let second = document.createElement('span');
    let stop = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    day.textContent = doc.day;
    hour.textContent = doc.hour;
    minute.textContent = doc.minute;
    second.textContent = doc.seconds;
    stop.textContent = doc.stop;

    li.appendChild(day);
    li.appendChild(hour);
    li.appendChild(minute);
    li.appendChild(second);
    li.appendChild(stop);

    triggerList.appendChild(li);

}

/*
var data = db.collection('Triggers/append').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderTriggers(doc);
    })
})
*/



ref.on("value", function(snapshot) {
    //var newPost = snapshot.val();
    //console.log("Day: " + newPost.day);
    snapshot.forEach(childSnapshot => {
        //console.log(childSnapshot);
        childData = childSnapshot.val();
        //console.log(childData.hour);
        renderTriggers(childData);
    });
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });