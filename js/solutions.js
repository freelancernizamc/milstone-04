// Problem: Write a function to do addition of following array: [5, 6, 7], [8, 9, 4] and [3, 5 2];
    var arr1 = [5, 6, 7];
    var arr2 = [8, 9, 4];
    var arr3 = [3, 5,2];
function sumOfArray(arr){
    var sum = 0;
    for ( var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    console.log(sum);
}
    sumOfArray(arr1);
    sumOfArray(arr2);
    sumOfArray(arr3);

    // Problem: Find the cheapest phone from an array
    // Ans:
    const phones = [
        {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'}, 
        {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'gray'}, 
        {name: 'iphone', camera: 10, storage: '32gb', price: 82000, color: 'silver'}, 
        {name: 'Xomi', camera: 10, stora0e: '32gb', price: 52000, color: 'blue'}, 
        {name: 'Oppo', camera: 10, storage: '32gb', price: 20000, color: 'silver'}, 
        {name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver'}, 
        {name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'silver'},
        ];

        function cheapestPhone(phones){
            let cheapest = phones[0];
        for(let i =0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
        cheapest = phone;
                }
            }
        return cheapest;
        }
        const mySelection = cheapestPhone(phones);
        console.log(mySelection);


        // Problem: Calculate the total cost of the products in a shopping cart
        const shoppingCart = [
            {name: 'shoe', price: 1200},
            {name: 'shirt', price: 2200},
            {name: 'pant', price: 3700},
            {name: 'balt', price: 600}
            ];
            function totalCost(products){
            let sum = 0;
            for(let i =0; i< products.length; i++){
            const product = products[i];
            sum = sum + product.price;
            console.log(products);
                }
            return sum;
            }
            
            const expense = totalCost(shoppingCart);
            console.log('Total expense today:', expense);


            let sum=0; 
            for( let i = 0; i<=3;i++){ 
            sum = sum + i; 
            }
            console.log(sum);