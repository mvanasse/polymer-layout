module.exports = '\n<!-- - vars = package.json-->\n<element name="polymer-page" attributes="fullbleed">\n  <!-- template-->\n  <!-- include style.css--><script type="text/javascript">\nPolymer.register(this, {\n  fullbleed: true,\n  inserted: function() {\n    document.head.style.cssText += "height: 100%; overflow: hidden; margin: 0;";\n    document.body.style.cssText += "position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden;";\n    return document.body.style.transition = "all 0.3s";\n  }\n});\n</script>\n</element>';