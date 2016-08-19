(function ()
{
    'use strict';

    window.exercise2 = {
        reverseNumber: function (number)
        {
            if(typeof number === 'number') {
                return Number(number.toString().split('').reverse().join(''));
            }
            else {
                return false;
            }
        },
        squareOrCube: function (array)
        {
            for(var i=0; i<array.length; i++) {
                if(array[i] % 2 !== 0) {
                    array[i] = Math.pow(array[i], 2);
                }
                else {
                    array[i] = Math.pow(array[i], 3);
                }
            }

            return array;
        },
        replaceString: function (list, string, newString)
        {
            var counter = 0;
            for(var i=0; i<list.length; i++) {
                if(list[i] === string) {
                    list[i] = newString;
                    counter++;
                }
            }
            return counter===0 ? false: list;
        },
        maxArray: function (array)
        {
            var max = array[0];

            for(var i=0; i<array.length; i++) {
                for(var j=0; j<array.length; j++) {
                    if(typeof array[j] !== 'number') {
                        return false;
                    }
                    if(array[j] >= max) {
                        max = array[j];
                    }
                }
            }

            return max;
        },
        getObject: function (list, name)
        {
            var counter = 0;
            for(var i=0; i<list.length; i++) {
                if(list[i].name === name) {
                    counter++;
                    return list[i];
                }
            }
            return counter===0 ? false: list;
        }
    };
})();
