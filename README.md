# AEGIS

[AEGIS](https://github.com/KcramSolutions/aegis) is a versatile JavaScript library for making AJAX requests to APIs. It's designed to work seamlessly in both browser and Node.js environments.

## Installation

You can install AEGIS using npm:

```bash
npm install @kcram-solutions/aegis --save
```
## Usage
### Browser Usage
Add the library to your HTML file:
```html
<script src="path-to-aegis/aegis.js"></script>
```
Use it in your JavaScript code:
```javascript
(async () => {
  try {
    const response = await Aegis('https://api.example.com/data');
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
})();
```
### Node.js Usage
Install the library using npm:
```bash
npm install @kcram-solutions/aegis --save
```
Use it in your Node.js code:
```javascript
const Aegis = require('@kcram-solutions/aegis');

(async () => {
  try {
    const response = await Aegis('https://api.example.com/data');
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
})();
```
## API Reference
### Aegis()
```
Aegis(
    url, 
    config = { 
        method: "GET",
        proxy: false, 
        data: null,
        contentType: "application/json" 
}): Promise<{data, headers, status}>
```
Makes an AJAX request to the specified URL.

- `url`: **String** - The URL to make the request to.
- `config`: **object** - the configuration object
    - `method`: **String** - The HTTP method to use (default is 'GET').
    - `data`: **String** - The data to send with the request (optional).
    - `proxy`: **bool** - If will pass by the proxy (optional).
    - `contentType`: **string** - the request conten type (optional).

Returns a promise that resolves with the response data.



License
This project is licensed under the MIT License - see the LICENSE file for details.
```
MIT License - KCram Solutions

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```