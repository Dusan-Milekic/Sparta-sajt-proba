const people = document.getElementById('people');

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

const chagePeople = () => {
    const random = (Math.ceil((Math.random()*10000000)+100000));
    people.innerHTML = `${formatNumber(random)} people left`;
}



chagePeople();
