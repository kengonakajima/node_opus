set -x

node-gyp clean configure build --arch=x64
mv build/Release/opus.node ./opus.node.x86_64
node-gyp clean configure build --arch=arm64
mv build/Release/opus.node ./opus.node.arm64
lipo -create -output opus.node opus.node.arm64 opus.node.x86_64
rm opus.node.x86_64 opus.node.arm64
