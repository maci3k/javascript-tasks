(function ()
{
    'use strict';

    window.exercise6 = {

        isPalindrome: function (str)
        {
            return (str.toLowerCase() === str.split('').reverse().join('').toLowerCase() && str.length > 1);
        },

        onlyLetter: function (text)
        {
            var newText = '';

            if(typeof text === 'string') {
                for(var i=0; i<text.length; i++) {
                    if(text[i] >= 'a' && text[i] <= 'z') {
                        newText += text[i];
                    }
                }
                return newText;
            }
            else {
                return false;
            }
        },

        alphabetOrder: function (str)
        {
            return str.replace(/[0-9]/g, '').toLowerCase().split('').sort().join('');
        },

        upperCase: function (str)
        {
            str = str.split(' ');

            for(var i=0; i<str.length; i++) {
                str[i] = str[i][0].toUpperCase() + str[i].substring(1);
            }

            return str.join(' ');
        },

        findTheLongestWord: function (str)
        {
            var words = str.replace(/[\W_]+/g,' ').split(' ');
            var max = words[0].length;
            var result = [], position = 0;

            for(var i=1; i<words.length; i++) {
                if(words[i].length >= max) {
                    max = words[i].length;
                    position = i;
                }
            }
            for(i=0; i<words.length; i++) {
                if(words[i].length === max) {
                    result.push(words[i]);
                }
            }

            return result;
        }
    };


})();
