# My CHECKIO (Javascript/Typescript) Solutions

My repo contains setup steps to get typescript transpiling working for CheckIO. Everyone may have different setup, but this works for me.

The first section will go over how to set up CheckIO's own client for syncing solutions against their server. The second section will go over how to setup Typescript environment so you can start coding.

# Section 1 - CheckIO Client

Sometimes, it's easier to use checkio-client. Read [this](https://js.checkio.org/blog/new-tool-checkio-client/) to learn more about its usage.

## To Install
```
$ pip3 install checkio_client
$ checkio config
```

## Points about Configuring
When you configure checkio to work with this repo, make sure you have the appropriate path. i.e. for me, it's
```
/Users/name/Workspaces/checkio/js_checkio_solutions
```

## To download the Question Template
Make sure you use right mission name!!! This can be found in the URL for each particular mission on js.checkio.org. !!! DO NOT USE
the file name for that template. There is a few GOTHCA here. 
1) Mission name, words are separated with dashes (-) not underscore. MAKE SURE YOU USE THIS NAME!
2) filename, words are separated with underscore. DO NOT USE THIS.
3) Once you init the mission, all previous code changes are LOST.

if you don't follow these rules, program will give you http errors you don't really understand why...


```
$ checkio init js_checkio_solutions/Elementary/multiply-intro
```

## To test (or they call 'run') the solution (AGAINST SERVER)
you can just run .js file so it check against checkio server, make sure the file has execute permission. i.e.

```
$ ./multi_intro.js  
```
or you can test locally with node
```
$ node multi_intro.js
```

## To validate (or they call 'check') your final solution (AGAINST SERVER and submit your solution)
you can run with --check argument
```
$ ./multi_intro.js --check
```

## Sync your checkio solution between local/server
```
$ checkio sync
```

## Install Chrome extension for checkio
```
$ checkio install-plugin
```


# Section 2 Typescript Transpiler Setup
In order to write Typescript code you have to 

prereq' -  install node.

1. Install typescript package from node
2. Have transpiler working in the background
3. move the question template from checkio init to your typescript directory and rename with extension .ts

## Install Typescript
```
$ npm install -g typescript
$ npm install
```

## Run Transpiler
```
$ npm run t
or
$ tsc -w -p .
```

## Move template to your ts directory after you do checkio init
```
$ checkio init multiply-intro
$ mv ./js_checkio_solutions/Elementary/multiply_intro.js ./ts/Elementary/multiply_intro.ts
```
now your solution will be transpiled and your final solution can be found in js_checkio_solutions folder.


### Happy Coding...