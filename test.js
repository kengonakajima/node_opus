const {OpusEncoder}=require("./opus.node");
const encoder=new OpusEncoder(48000,1);
console.log("encoder:",encoder);

const samples=new Int16Array(960);
for(let i in samples) samples[i]=Math.sin(i*440*Math.PI/48000)*20000;
console.log("samples:",samples);
const encoded=encoder.encode(samples);
console.log("encoded:",encoded);
const decoded=encoder.decode(encoded);
console.log("decoded:",decoded,decoded.length);
const dv=new DataView(decoded.buffer);
const n=decoded.length/2;
const samples2=new Int16Array(n);
for(let i=0;i<n;i++) samples2[i]=dv.getInt16(i*2);
console.log("samples2:",samples2);

