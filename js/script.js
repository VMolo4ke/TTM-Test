console.log(1)

function search () {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var a = document.getElementsByClassName('item__name');

    for (i=0; i<a.length; i++){
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].parentElement.parentElement.style.display = "";
        }
        else {
            a[i].parentElement.parentElement.style.display = "none";
        }
    }
}

var inpu = document.getElementById('searchInput');
console.log(1)