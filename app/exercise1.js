(function ()
{
    'use strict';

    window.exercise1 = {
        getDescendingNumbers: function (numberFrom, numberTo)
        {
            if(numberFrom < numberTo || typeof(numberTo) !== 'number' || typeof(numberFrom) !== 'number' || isNaN(numberFrom) || isNaN(numberTo)) {
                return false;
            }

            var result = '' + numberFrom;
            for(var i=numberFrom-1; i>=numberTo; i--) {
                result += ' ' + i;
            }

            return result;
        },
        deleteString: function (string, array)
        {
            var result = [], counter = 0;

            for(var i=0; i<array.length; i++) {
                if(array[i] !== string) {
                    result[counter++] = array[i];
                }
            }

            return result;
        },

        stringCounter: function (array)
        {
            var counter = 0;

            if(array.length === 0) {
                return 0;
            }
            for(var i=0; i<array.length; i++) {
                if(typeof(array[i]) === 'string') {
                    counter++;
                }
            }

            return counter;
        },

        squareOdd: function (array)
        {
            for(var i=0; i<array.length; i++) {
                if(array[i] % 2 !== 0 && typeof(array[i]) === 'number') {
                    array[i] *= array[i];
                }
            }

            return array;
        },

        areaOfTrapezoid: function (a, b, h)
        {
            var area = 0;

            if(a<0 || b<0 || h<0 || typeof a !== 'number' || typeof b !== 'number' || typeof h !== 'number') {
                return false;
            }
            else {
                area = (a+b) * 0.5 * h;
            }

            return area;
        }
    };
})();
