# EarthId Client Side Integration

## Setup developer API credentials
  1. Contact us on future@myearth.id
  2. Register yourself as vendor with [MyEarthId](https://www.myearth.id)
  3. We will generate apiKey and secretKey of the respective app.
  4. These credentials are important for initializing our sdk. The example for the same is given below.

## Integration Steps

### Step 1: Generate QR code
```
const qrCodeLink = await generateQrCode();
```

## generateQrCode

function to creates a QR code image link for login with earthId or for document.

### Parameters

-   `type` **[string]** this is optional, supported values are **login** (to get profile information) or **document** if documents are also required from earthId app.
- `socketId` **[string]** this is optional, only required if you want to listen data using socket.

### Response
Returns **[string]** response web URL string of QR code generated which needs to display as image

### Step 2: Display generated QR code link as image within your application
```
<img id="qrCode" src={qrCodeLink} style={{ width: 150, height: 150 }} />
```

### Step 3: Open EarthId Mobile App to scan the QR code

### Step 4: Authorize requested site to use your profile information

### Step 5: You will get user data on registered webhook, sample response:
```
{
    "fname": "Rahul Asati",
    "userEmail": "rahul@rejolut.com",
    "userMobileNo": "+918512806087",
    "dob": "",
    "emailVerified": true,
    "score": 450,
    "earthId": "42707778",
    "mobileVerified": true,
    "duration": "86400000"
}
```
### Step 6 (optional): you can listen for socket to receive user data

## listenForUserData

### Step 1: Connect to EarthId socket URL

```
import io from 'socket.io-client';

const socketUrl = "https://socket.myearthid.ml";

let socket = io.connect(socketUrl);
socket.on('connect', () => {
    // pass this socketId while generateQRCode
    socketId = socket.id
    resolve(socketId)
})

```

### Step 2: connect to EarthId socket URL

```
socket.on(`userdata`, async userData => {
    
})
```

#### Example Response
```
{
    "fname": "Rahul Asati",
    "userEmail": "rahul@rejolut.com",
    "userMobileNo": "+918512806087",
    "dob": "",
    "emailVerified": true,
    "score": 450,
    "earthId": "42707778",
    "mobileVerified": true,
    "duration": "86400000"
}
```
