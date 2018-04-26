# fluidblog

Blog with ReactJS and Firebase

## Get Start

### Cloning

<pre>
  git clone https://github.com/gabrielrufino/fluidblog<br>
  cd fluidblog<br>
</pre>

### Use npm or yarn to install dependencies

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

## Post JSON
<pre>
  {
		"title": "Post title",
    "text": "Post text"
  }
</pre>
