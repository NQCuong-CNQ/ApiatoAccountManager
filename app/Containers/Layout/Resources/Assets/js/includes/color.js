$(function() {

    /**
     * @todo RANDOM CORLOR LIGHT
     * @author Nguyễn Chiến
     */
    var getRandomColorLight  = $.getRandomColorLight  = function getRandomColorLight() {

        // var letters = 'BCDEF'.split('');
        // var color = '#';
        // for (var i = 0; i < 6; i++ ) {
        //     color += letters[Math.floor(Math.random() * letters.length)];
        // }

        // return color;

        // return "hsl(" + 360 * Math.random() + ',' +
        //          (25 + 70 * Math.random()) + '%,' + 
        //          (85 + 10 * Math.random()) + '%)'
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.08 + ')';
    }
});