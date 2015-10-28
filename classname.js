var hasClass = function (element, className) {
    return Array.prototype.some.call(childNode.classList, function (childNodeClassName) {
        return childNodeClassName === className;
    });
};

var getElementsByClassName = function (className) {
    var results = [];

    function recursion(input) {
        Array.prototype.forEach.call(input.childNodes, function (childNode) {
            if (childNode.nodeType === 1) {
                if (hasClass(childNode)) {
                    results.push(childNode);
                }
                recursion(input.childNodes[i]);
            }
        });
    }
    recursion(document);

    return results;
};
