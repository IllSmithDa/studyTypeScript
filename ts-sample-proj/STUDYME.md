# Initialize TS conffig 

  1. command tsc --init

    a. create simple ts context file

  2. Note that you can initalize both node package manager and ts config in the same file

  3. Once you created the index.html file and the index.ts and index.js file you need to 

    connect the ts and js file using the 'outDir' in the tsconfig file and set it to 
    
    your js file

  4. initialize watchmode tsc -w 

    a. will transpile to the out dir and watch for changes made in ts and auto transiple to js

# Start up a Lite Server to see your work 

  1. npm i --save lite-server

  2. configure "start": "lite-server" in the package.json file

  3. run command npm start to start up lite server