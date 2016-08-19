(function ()
{
    'use strict';

    window.arraysAnswers = {
        indexOf: function (arr, item)
        {
            var index = -1;

            for(var i=0; i<arr.length; i++) {
                if(arr[i] === item) {
                    return i;
                }
            }

            return index;
        },

        sum: function (arr)
        {
            var sum = 0;

            for(var i=0; i<arr.length; i++) {
                sum += arr[i];
            }

            return sum;
        },

        copy: function (arr)
        {
            var copy = [];

            for(var i=0; i<arr.length; i++) {
                copy[i] = arr[i];
            }

            return copy;
        },

        remove: function (arr, item)
        {
            var copy = window.arraysAnswers.copy(arr), counter = 0;

            for(var i=0; i<copy.length; i++) {
                if(copy[i] !== item) {
                    arr[counter++] = copy[i];
                }
            }
            arr.length = counter;

            return arr;
        },

        removeFromCopy: function (arr, item)
        {
            var result = [], counter = 0;

            for(var i=0; i<arr.length; i++) {
                if(arr[i] !== item) {
                    result[counter++] = arr[i];
                }
            }

            return result;
        },

        append: function (arr, item)
        {
            arr.length++;
            arr[arr.length-1] = item;
        },

        appendToCopy: function (arr, item)
        {
            var copy = window.arraysAnswers.copy(arr);

            copy[arr.length] = item;

            return copy;
        },

        truncate: function (arr)
        {
            return arr.pop();
        },

        prepend: function (arr, item)
        {
            var copy = window.arraysAnswers.copy(arr), j=0;

            arr.length++;
            arr[0] = item;
            for(var i=1; i<arr.length; i++) {
                arr[i] = copy[j++];
            }
        },

        curtail: function (arr)
        {
            var head = arr[0];
            for(var i=0; i<arr.length-1; i++) {
                arr[i] = arr[i+1];
            }
            arr.length--;

            return head;
        },

        concat: function (arr1, arr2)
        {
            var result = [];

            for(var i=0; i<arr1.length; i++) {
                result[i] = arr1[i];
            }
            for(var j=0; j<arr2.length; j++) {
                result[i++] = arr2[j];
            }

            return result;
        },

        insert: function (arr, index, item)
        {
            arr.splice(index, 0, item);
        },

        count: function (arr, item)
        {
            var counter = 0;

            for(var i=0; i<arr.length; i++) {
                if(arr[i] === item) {
                    counter++;
                }
            }

            return counter;
        },

        duplicates: function (arr)
        {
            var result = [];

            for(var i=0; i<arr.length; i++) {
                for(var j=0; j<arr.length; j++) {
                    for(var k = 0; k < arr.length; k++) {
                        if(arr[i] === arr[k] && i !== j && j !== k && i !== k) {
                            result.push(arr[i]);
                            arr = window.arraysAnswers.remove(arr, arr[i]);
                        }
                    }
                }
            }

            return result;
        },

        square: function (arr)
        {
            for(var i=0; i<arr.length; i++) {
                arr[i] = Math.pow(arr[i], 2);
            }

            return arr;
        },

        findAllOccurrences: function (arr, target)
        {
            var result = [];

            for(var i=0; i<arr.length; i++) {
                if(arr[i] === target) {
                    result.push(i);
                }
            }

            return result;
        }

    };
})();
