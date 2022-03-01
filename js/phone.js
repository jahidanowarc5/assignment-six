
document.getElementById('error-message').style.display = 'none';
const searchPhone = () => {
 const searchField = document.getElementById('search-field');
 const searchText = searchField.value;
 searchField.value = '';
 if(searchText == ''){
    document.getElementById('error-message').style.display = 'block';
  }

 else{
    document.getElementById('error-message').style.display = 'none'
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
 
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data));
 }
 
    
}

const displayPhone = data => {
    const phones = data.data;
    const searchResult = document.getElementById
    ('search-result');
    searchResult.textContent = '';
    phones.forEach(phone => {
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card h-100">
        <img class="img-fluid" src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.brand}</p>
          <button onclick="phoneDetail('${phone.slug}')" class="text-white bg-success">Detail</button>
        </div>
       
      </div>`;
      searchResult.appendChild(div);
    });
    
}

const phoneDetail = id => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
    
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data));

}
const displayPhoneDetail = phone =>{
    
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = ` <img class="img-fluid" src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.name}</h5>
      <h5>storage: ${phone.mainFeatures.storage}</h5>
      <h5>displaysize: ${phone.mainFeatures.displaySize}</h5>
      <h5>chipSet: ${phone.mainFeatures.chipSet}</h5>
      <p class="card-text">${phone.brand}</p>
      
    </div>`;
    phoneDetails.appendChild(div);

}

