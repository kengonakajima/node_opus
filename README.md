# Build script for Opus node binding.

This repository (build_mac.sh) is forked from @discordjs/opus .

@discordjs/opus is a  Native bindings to libopus v1.3 .


## Platforoms:

- macOS: Universal binary of opus.node 
- Wndows: x64 binary of opus.node



## Building macos universal binary addon

```
npm i
bash build_mac.sh
```

## Building Windows x64 binary addon

```
npm i
build_win.bat
```


## Testing the binding

```
node test.js
```

## Module usage

```js
const { OpusEncoder } = require('@discordjs/opus');

// Create the encoder.
// Specify 48kHz sampling rate and 2 channel size.
const encoder = new OpusEncoder(48000, 2);

// Encode and decode.
const encoded = encoder.encode(buffer);
const decoded = encoder.decode(encoded);
```

## Platform support
⚠ Node.js 12.0.0 or newer is required.
- macOS x64 + arm64


