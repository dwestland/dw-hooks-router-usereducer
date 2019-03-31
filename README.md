# DW Hooks Router useReducer

## Create Environment Variable for ipdata API key

Add .env to .gitignore

Create a .env file:

```REACT_APP_IPDATA_KEY = <ipdata API key (no quotes)>```

Add to component to retrieve key

```const ipdataKey = process.env.REACT_APP_IPDATA_KEY```

***Note: You must create custom environment variables beginning with REACT_APP_***
