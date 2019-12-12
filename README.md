### myearthid

## How to use it
Ask myearth.id to register yourself as Vendor. Once Registered you will get apiKey.

Now put this apiKey in api.js file

Place api.js file  inside src folder.

Call generateReqNo and getApiKey to store it somwhere persistently for the whole session.

Call listenForServiceProviderResponse to listen the socket emit for service provider name. Pass requestno as argument

Call listenForUserData  for getting user Data once the user has authorized the request.Pass requestno as argument.

Call generateqr for getting QR code data to be scanned by mobile.


