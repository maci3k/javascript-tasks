(function ()
{
    'use strict';

    window.exercise7 = {

        isPrimeNumber: function (num)
        {
            for(var i=2; i<num; i++) {
                if(num % i === 0) {
                    return false;
                }
            }

            return true;
        },
        whatType: function (arg)
        {
            return typeof arg;
        },
        findMin: function (arr)
        {
            if(arr.length !== 0) {
                var min;

                for(var i=0; i<arr.length; i++) {
                    if(typeof arr[i] === 'number') {
                        min = arr[i];
                        break;
                    }
                }
                for(i=1; i<arr.length; i++) {
                    if(min > arr[i] && typeof arr[i] === 'number') {
                        min = arr[i];
                    }
                }

                return min;
            }
            else {
                return false;
            }
        },
        findAlmostMax: function (arr)
        {
            var max = [];

            for(var i=0; i<arr.length; i++) {
                if(typeof arr[i] === 'number') {
                    max.push(arr[i]);
                }
            }

            if(max.length === 0) {
                return false;
            }
            else {
                max = max.sort();
                return max[max.length-2];
            }
        },
        findAlmostMin: function (arr)
        {
            var min = [];

            for(var i=0; i<arr.length; i++) {
                if(typeof arr[i] === 'number') {
                    min.push(arr[i]);
                }
            }

            if(min.length === 0) {
                return false;
            }
            else {
                return min.sort()[1];
            }
        }
    };
})();
