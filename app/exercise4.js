(function ()
{
    'use strict';

    // You can extend prototypes here.

        String.prototype.countVowels = function() {
            var count = 0;

            for(var i=0; i<this.length; i++) {
                switch(this[i].toLowerCase()) {
                    case 'a': count++; break;
                    case 'e': count++; break;
                    case 'i': count++; break;
                    case 'o': count++; break;
                    case 'u': count++; break;
                    case 'y': count++; break;
                }
            }

            return count;
        };

        Array.prototype.arrayToString = function() {
            var result = '';

            if(this.length > 0) {
                result = this[0];
            }

            for(var i=1; i<this.length; i++) {
                result += ' ' + this[i].valueOf();
            }

            return result;
        };

        Number.prototype.add = function(newNumber) {
            return this + newNumber;
        };

        Number.prototype.isInTheRange = function(from, to) {
            if(from > to) {
                return undefined;
            }
            return (this > from && this < to);
        };

})();
