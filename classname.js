var getElementsByClassName = function (className) {
    var results = [];

    function recursion(input) {
        for (var i = 0; i < input.childNodes.length; i++) {
            if (input.childNodes[i].nodeType === 1) {
                var positiveNode = input.childNodes[i];
                Array.prototype.forEach.call(positiveNode.classList, function (matchingNode) {
                    if (matchingNode === className) {
                        results.push(positiveNode);
                    }
                });
                recursion(input.childNodes[i]);
            }
        }
    }
    recursion(document);

    return results;
};
