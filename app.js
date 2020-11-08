const triggerList = document.querySelector('#trigger-list');

function renderTriggers(doc) {
    let li = document.createElement('li');
    let day = document.createElement('span');
    let hour = document.createElement('span');
    let minute = document.createElement('span');
    let second = document.createElement('span');
    let stop = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    day.textContent = doc.data().day;
    hour.textContent = doc.data().hour;
    minute.textContent = doc.data().minute;
    second.textContent = doc.data().seconds;
    stop.textContent = doc.data().stop;

    li.appendChild(day);
    li.appendChild(hour);
    li.appendChild(minute);
    li.appendChild(second);
    li.appendChild(stop);

    triggerList.appendChild(li);

}

var data = db.collection('Triggers').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderTriggers(doc);
    })
})