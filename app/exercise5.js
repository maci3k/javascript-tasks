(function ()
{
    'use strict';

    window.exercise5 = {
        mergeObject: function (object1, object2)
        {
            var newObject = {};
            if(typeof object1 === 'object' && typeof object2 === 'object') {
                for(var property in object1) {
                    if(object1.hasOwnProperty(property)) {
                        newObject[property] = object1[property];
                    }
                }
                for(property in object2) {
                    if(object2.hasOwnProperty(property)) {
                        newObject[property] = object2[property];
                    }
                }

                return newObject;
            }
            else {
                return false;
            }
        },
        countLetter: function (object, letter)
        {
            var count = 0;

            for(var property in object) {
                if (object.hasOwnProperty(property)) {
                    for(var i=0; i<object[property].length; i++) {
                        if(object[property][i].toLowerCase() === letter.toLowerCase()) {
                            count++;
                        }
                    }
                }
            }

            return count;
        },
        makeObject: function (array)
        {
            var newObject = {};
            for(var i=0; i<array.length; i++) {
                if(array[i].length !== 2) {
                    return false;
                }
                newObject[array[i][0]] = array[i][1];
            }

            return newObject;
        },
        propertyNames: function (object)
        {
            var array = [];

            for(var property in object) {
                if(object.hasOwnProperty(property)) {
                    array.push([property, object[property]]);
                }
            }

            return array;
        }
    };
})();
