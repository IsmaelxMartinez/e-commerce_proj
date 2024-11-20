document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {draggable: true});
    // const menuBtn = document.querySelector('.sidenav-trigger');
    // menuBtn.addEventListener('click', function(){
    //   instances[0].open();
    // })
    // console.log(menuBtn)
  });


  const productItems = document.querySelectorAll('.product-item');

  // fetch json data
  fetch('products.json')
    //converting the response into json
    .then(response => response.json())
    .then(products => {

       
        //loop through products and populate intem divs
        productItems.forEach((productItem, index) => {

            //checks if there is a corresposponding item at the current index
            if(products[index]){
                //getting product at current index
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
                priceEl.textContent = `$${product.price.toFixed(2)}`;

                const descriptionEl = document.createElement('p');
                descriptionEl.classList.add('product-description');
                descriptionEl.textContent = product.description;

                //append created elements to product-item div 
                productItem.appendChild(imgEl);
                productItem.appendChild(nameEl);
                productItem.appendChild(priceEl);
                productItem.appendChild(descriptionEl);

            }
        });
    })
    //catch any errors suring the the fetch or data processing
    .catch(error => {
        console.error('Error loading the products:', error);
    });
    

    const filterBtns = document.querySelectorAll('.filter-btn');

    //loops through each button
    filterBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            const filterType = e.target.getAttribute('data-filter');

            //if a item has a speciftic filter type only thats going to be displayed
            productItems.forEach(item => {
                if (item.classList.contains(filterType)){
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
