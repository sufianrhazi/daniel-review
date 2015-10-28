var hasClass = function (element, className) {
    var isFound = false;
    Array.prototype.forEach.call(childNode.classList, function (childNodeClassName) {
        if (childNodeClassName === className) {
            isFound = true;
        }
    });
    return isFound;
};

var getElementsByClassName = function (className) {
    var results = [];

    function recursion(input) {
        for (var i = 0; i < input.childNodes.length; i++) {
            if (input.childNodes[i].nodeType === 1) {
                if (hasClass(input.childNodes[i])) {
                    results.push(input.childNodes[i]);
                }
                recursion(input.childNodes[i]);
            }
        }
    }
    recursion(document);

    return results;
};
