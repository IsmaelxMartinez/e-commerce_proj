document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {draggable: true});
    // const menuBtn = document.querySelector('.sidenav-trigger');
    // menuBtn.addEventListener('click', function(){
    //   instances[0].open();
    // })
    // console.log(menuBtn)
  });

  // fetch json data
  fetch('products.json')
    //converting the response into json
    .then(response => response.json())
    .then(products => {

        const productItems = document.querySelectorAll('.product-item');

        //loop through products and populate intem divs
        productItems.forEach((productItem, index) => {

            if(products[index]){
                const product = products[index];

                //creating html elements for each products
                const imgEl = document.createElement('img');
                imgEl.classList.add('product-image');
                imgEl.src = product.photo;
                imgEl.alt = product.name;

                const nameEl = document.createElement('h2');
                nameEl.classList.add('product-name');
                nameEl.textContent = product.name;

                const priceEl = document.createElement('p');
                priceEl.classList.add('product-price');
                priceEl.textContent = product.price;

                //append created elements to product-item div 
                productItem.appendChild(imgEl);
                productItem.appendChild(nameEl);
                productItem.appendChild(priceEl);

            }
        });
    })
    .catch(error => {
        console.error('Error loading the products:', error);
    });
    