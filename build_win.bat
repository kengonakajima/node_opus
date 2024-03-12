set -x

rm opus.node

node-gyp clean configure build --arch=x64
copy build\product\opus.node .

