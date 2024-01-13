const listExperience = document.querySelector('#listWorkExperience')
console.log(listWorkExperience)


let dataWorkExperience = [];
const addWorkExperience = (event) =>{
    event.preventDefault();
    console.log('tes')

    let messageTitle = prompt('Tambahkan Pekerjaan Anda')
    let messageDescription = prompt('Tambahkan Deskripsi Pekerjaan Anda')

    let newData = {
        title: messageTitle,
        description: messageDescription
    }
    console.log(newData)

    dataWorkExperience.push(newData)
    console.log(dataWorkExperience)


    dataWorkExperience.map = ((item) =>{
        let displayList = document.createElement("li");
        let displayTitle = document.crerateElement("p");

        displayTitle.innerHTML = `<p class="tags">
                                ${item.title}<br /><span>${item.description}
                                <span>lama waktu - now</span></span>
                                </p>`
        displayList.appendChild(displayTitle);
        listWorkExperience.appendChild(displayList)
    })
}