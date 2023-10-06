# promise-split


`promise-split` is simple utility that allows you to write clearing code when dealing with async/await. Skip the need to wrap `await` inside a try/catch block. 


## Usage

```js
import fs from 'fs';
import split from 'promise-split';

const readWithPromiseSplit = async (path) => {
    const [file, error] = await split(fs.promises.readFile(path));

    if (error) {
        // Handle errors here
        return 'Failed to read file';
    }

    return file;
}
```