(function(window){
    "use strict";
    function ClipboardManager() {}

    ClipboardManager.prototype = {

        _copyAction: 'copy',

        canCopyToClipboardBePerformed: function () {
            return document.queryCommandSupported(this._copyAction);
        },

        copyTextToClipboard: function(text) {
            var inputNode = this._createInputNode();
            inputNode.value = text;

            document.body.appendChild(inputNode);
            inputNode.select();

            try {
                var result = document.execCommand(this._copyAction);
            } catch (err) {
                result = false;
            }

            document.body.removeChild(inputNode);
            return result;
        },

        _createInputNode: function() {
            var inputNode = document.createElement("INPUT");

            inputNode.style.position = 'fixed';
            inputNode.style.top = 0;
            inputNode.style.left = 0;

            inputNode.style.width = '1px';
            inputNode.style.height = '1px';
            inputNode.style.padding = 0;

            inputNode.style.border = 'none';
            inputNode.style.outline = 'none';
            inputNode.style.boxShadow = 'none';
            inputNode.style.background = 'transparent';
            inputNode.style.color = '#ffffff';

            return inputNode;
        }
    };
    window.ClipboardManager = window.ClipboardManager || new ClipboardManager();
})(window);