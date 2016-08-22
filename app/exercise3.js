(function ()
{
    'use strict';

    window.exercise3 = {

        doAdult: function (array)
        {
            /*var person;
            for(person in array) {
                if(person.age < 18) {
                    person.age = 18;
                }
            }*/
            for(var i=0; i<array.length; i++) {
                if(array[i].age < 18) {
                    array[i].age = 18;
                }
            }
        },
        findTheBiggestBox: function (x, y, z)
        {
            if(typeof x === 'number' && typeof y === 'number' && typeof z === 'number') {
                var boxX = (3*x) * y * z;
                var boxY = x * (y*y) * z;
                var boxZ = x * y * (y+z);

                if(boxX >= boxY && boxX >= boxZ) {
                    return 1;
                }
                if(boxY >= boxX && boxY >= boxZ) {
                    return 2;
                }
                if(boxZ >= boxX && boxZ >= boxY) {
                    return 3;
                }
            }
            else {
                return false;
            }
        },
        reverseText: function (text)
        {
            if(typeof text === 'string') {
                return text.split('').reverse().join('');
            }
            else {
                return false;
            }
        },
        factorial: function (N)
        {
            var result = [];
            if(typeof N === 'number') {
                var fact = 1;
                result.push(fact);
                for(var i=1; i<=N; i++) {
                    fact *= i;
                    result.push(fact);
                }
                return result;
            }
            else {
                return false;
            }
        },
        sumProperties: function (object)
        {
            var param, sum = 0;
            for(param in object) {
                if (object.hasOwnProperty(param)) {
                    sum += object[param];
                }
            }
            return sum;
        }
    };

})();
