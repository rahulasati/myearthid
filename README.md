<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [getApiKey][1]
-   [generateqr][2]
    -   [Examples][3]
-   [listenForServiceProviderResponse][4]
    -   [Parameters][5]
    -   [Examples][6]
-   [listenForUserData][7]
    -   [Parameters][8]
    -   [Examples][9]

## getApiKey

Returns API Key for vendor

## generateqr

API for generating QR Code

### Examples

```javascript
response 
qrData=`{"apikey":"werty","encryptionkey":"1234567","reqNo":"qwertyuuytr","sessionKey":"wertyuytresd" }`
```

## listenForServiceProviderResponse

Start Listening for service provider name

### Parameters

-   `cb`  

### Examples

```javascript
O/P Successfull
{
"serviceProvider": "FCart ",
}
```

```javascript
O/P Unsuccessfull 
Error object
```

## listenForUserData

Socket listening for user Data after approval from user through app

### Parameters

-   `cb` **any** callback for data response

### Examples

```javascript
response successfull
newreq:{
"pressed":false,
"userEmail":"srvo@gmail.com",
"userMobileNo":"+916361887698",
"fname":"Sarvottam",
"dob":"05121993",
"emailVerified":true
"mobileVerified":false
"score":250
}
//Unsuccessfull 
* newreq:{
"pressed":true,
}
```

[1]: #getapikey

[2]: #generateqr

[3]: #examples

[4]: #listenforserviceproviderresponse

[5]: #parameters

[6]: #examples-1

[7]: #listenforuserdata

[8]: #parameters-1

[9]: #examples-2