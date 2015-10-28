var hasClass = function (element, className) {
    return [].some.call(childNode.classList, function (childNodeClassName) {
        return childNodeClassName === className;
    });
};

var getElementsByClassName = function (className) {
    var results = [];

    function recursion(input) {
        [].forEach.call(input.childNodes, function (childNode) {
            if (childNode.nodeType === 1 && hasClass(childNode)) {
                results.push(childNode);
            }
            recursion(input.childNodes[i]);
        });
    }
    recursion(document);

    return results;
};
