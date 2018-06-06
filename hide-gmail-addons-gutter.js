'use strict';

function getGutterElem() {
    return document.getElementsByClassName('nH bAw nn')[0];
}

function removeElem(elem) {
    elem.parentNode.removeChild(elem);
    console.info('hide-gmail-addons-gutter: removing ', elem);
}

window.onload = function() {

    var gutter = getGutterElem();

    if (gutter) {

        removeElem(gutter);

    } else {

        // Create an observer to look for known gutter elements
        var observer = new MutationObserver(function(mutationsList) {
            var gutter = getGutterElem();

            // Remove the gutter and disconnect the observer if found
            if (gutter) {
                removeElem(gutter);
                observer.disconnect();
            }
        });

        // Spy on something reliable for mutation events
        var mainContainer = document.getElementsByClassName('nH')[0];

        // Start observing the target
        observer.observe(mainContainer, {
            childList: true
        });

    }

};