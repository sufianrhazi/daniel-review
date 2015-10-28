var getElementsByClassName = function (className) {
    var allNodesList = [];
    var results = [];

    function recursion(input) {
        if (input.childNodes.length > 0) {
            for (var i = 0; i < input.childNodes.length; i++) {
                if (input.childNodes[i].nodeType === 1) {
                    allNodesList.push(input.childNodes[i]);
                    recursion(input.childNodes[i]);
                }
            }
        }
    }
    recursion(document);

    allNodesList.forEach(function (positiveNode) {
        Array.prototype.forEach.call(positiveNode.classList, function (matchingNode) {
            if (matchingNode === className) {
                results.push(positiveNode);
            }
        });
    });
    return results;
};
