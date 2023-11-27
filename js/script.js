const list = ['pasta', 'tonno', 'prezzemolo', 'formaggio'];

const listContainer = document.getElementById('list');

let i = 0;
while(i < list.length){
    const li = document.createElement('li');
    li.innerText = list[i];
    i++;

    listContainer.appendChild(li);
}