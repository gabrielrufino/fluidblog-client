# fluidblog

Blog with ReactJS and Firebase

## Get Start

git clone https://github.com/gabrielrufino/fluidblog<br>
cd fluidblog<br>
npm install<br>

## Sync with firebase

Set the connection to the firebase in the file <strong>src/base.js</strong>.

<code>
  const config = {
    apiKey: 'apiKey value',
    authDomain: 'authDomain value',
    databaseURL: 'databaseURL value',
    projectId: 'projectId value',
    storageBucket: 'storageBucket value',
    messagingSenderId: 'messagingSenderId value'
  }
</code>

## Post JSON
<code>
  {
		"title": "Post title",
    "text": "Post text"
  }
</code>
