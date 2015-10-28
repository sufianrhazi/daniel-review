var getElementsByClassName = function (className) {
    var results = [];

    function recursion(input) {
        for (var i = 0; i < input.childNodes.length; i++) {
            if (input.childNodes[i].nodeType === 1) {
                var childNode = input.childNodes[i];
                Array.prototype.forEach.call(childNode.classList, function (childNodeClassName) {
                    if (childNodeClassName === className) {
                        results.push(childNode);
                    }
                });
                recursion(input.childNodes[i]);
            }
        }
    }
    recursion(document);

    return results;
};
