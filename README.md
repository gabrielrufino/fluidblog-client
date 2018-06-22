# fluidblog-client

Client of the fluidblog project

## Get Start

### Cloning

<pre>
git clone https://github.com/gabrielrufino/fluidblog-client
cd fluidblog
</pre>

### Use npm or yarn to install the dependencies

<pre>
yarn || npm install
</pre>

## Sync with firebase

Set the connection to the firebase in the file <strong>src/base.js</strong>.

<pre>
const config = {
  apiKey: 'apiKey value',
  authDomain: 'authDomain value',
  databaseURL: 'databaseURL value',
  projectId: 'projectId value',
  storageBucket: 'storageBucket value',
  messagingSenderId: 'messagingSenderId value'
}
</pre>
