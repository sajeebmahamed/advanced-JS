
                    /************ undefined(negative/falsy) ************/

// 1. if we dont declared value on a variable 
    let student;
    // console.log(student);

// 2. In a function, some of possible way to get undefined value 

                        // a. if we dont return(value) explicity, then it will be undefined

                        function add(num1,num2){
                            console.log(num1+num2);
                        }
                        const result = add(5,6);
                        // console.log(result);

                        // b. if dont return with specific value/agrument/varibale
                        function add(num1, num2) {
                            console.log(num1 + num2);
                            return;
                        }
                        // const result = add(5, 6);
                        // console.log(result);

                        // c. if we dont pass exact number of parameter/arguments
                        function add(num1, num2) {
                            console.log(num1 + num2);
                            return;
                        }
                        const result1 = add(5);
                        console.log(result1);

// 3. Something you tring to access but its not visible on obj then it will be undefined

    const person = {name : "Sajeeb", phone : 123};
    // console.log(person.age);

// 4. If you declare a variable, which one is JS reserved word like 'undefined', then it will be definatly undefined value
    const val = undefined;
    // console.log(val);

                        /************ null->not existance/empty ************/

// null developer ra usually set kre dey. kono ekta value chelo, sheta onno jaygay soriye nelam, that means eta khali,, eta nullbundleRenderer.renderToStream

/** Sumamary **/

/*
null vs undefined ?

undefined onk vabe pete pare like varible declare kori nai, array er moodhe kno elemets nai
seta access korar try kra, property nai access krar try kra. But null explicilty set korte hy,
kno jinish nai or kono value chelo khali hye gese */