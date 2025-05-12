const btn = document.querySelector('.btn');

btn.addEventListener('click', addition);


function addition() {
    const task = document.querySelector('#taskName').value;
    const date = document.querySelector('#lastDate').value;

    if (task && date) {
        const row = document.querySelector('.table tbody');

        const num = row.rows.length;
        const newrow = row.insertRow();

        const cell1 = newrow.insertCell(0);
        const cell2 = newrow.insertCell(1);
        const cell3 = newrow.insertCell(2);
        const cell4 = newrow.insertCell(3);

        cell1.textContent = num + 1;
        cell2.textContent = task;
        cell3.textContent = "";
        cell4.textContent = date;

        document.querySelector('#taskName').value = "";
        document.querySelector('#lastDate').value = "";
    }
    else {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        const appendAlert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }

        appendAlert('Please fill all the fields.', 'danger');
    }
}