<!-- Answers to the Short Answer Essay Questions go here -->
###Questions###
1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware:
Sessions:

2. What does bcrypt do in order to prevent attacks?
Bcrypt:

3. What are the three parts of the JSON Web Token?
JSON Web Token--3 Parts

1. Header - declares the type (JWT - JSON Web Token) and the hashing algorithm used (SHA256 seems like a commonly used hash, I've seen it in several video tutorials and lessons)

2.Payload - can include registered claims, public claims and private claims. 
    Registered claims are things like (exp- expiration, when the token expires, nbf - not before, defines a time before the token will be valid, iat - issued at, when the token was issued, jti - json token identifier unique id helpful for one time use tokens to prevent them from being reused, iss - issuer, who made the token, sub - subject, who is the subject of the token, aud - audience, who is the audience for the token ).

    Public claims are ones we make ourselves, like name, username, address, password, and data we might want to store on the token.

    Private claims - these are mutually agreed on claim names that are protected.

3. Signature - includes the header, payload and secret
    
    The signature is a hash of the header and the payload, using the secret in the hash.