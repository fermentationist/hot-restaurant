$(document).ready(function () {
    getLists();
})

function getLists(endPoint = 'tables', id = 'tableList') {
    let location = window.location.origin;
    let request = $.get(`${location}/api/${endPoint}`).done(function (res) {
        console.log(res);
        let count = 1;
        res.forEach(function (e) {
            count++
            let newDiv = $("<div>");
            newDiv.addClass('card card-body bg-light');
            newDiv.append(`<h2><span class='badge badge-primary m-3'>${count}</span> | ${e.customerID}</h2>`)
            $(`#${id}`).append(newDiv)
            if (count === 5 && endPoint === 'tables') {
                getLists('waitlist', 'waitList')
            }
        })
    })
}








function getWaitList() {

}
