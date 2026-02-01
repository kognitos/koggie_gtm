---
title: @oauth | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/decorators/oauth-decorator
description: 
---

# @oauth | Books | Kognitos Documentation

## hashtagOverview

The@oauthdecorator is used to apply OAuth-based authentication to classes. It adds OAuth-specific metadata, such as endpoints, arguments, and provider details, to the class, enabling integration with OAuth services.

## hashtagSyntax

## hashtagParameters

The unique identifier for the OAuth configuration.

OAuthProvider

The OAuth provider:

- OAuthProvider.MICROSOFT

OAuthProvider.MICROSOFT

- OAuthProvider.GOOGLE

OAuthProvider.GOOGLE

List[OAuthFlow]

A list of OAuth flows.

authorize_endpoint

The authorization endpoint URL for the OAuth provider.

token_endpoint

The token endpoint URL for exchanging the authorization code for a token.

A list of scopes required by the OAuth provider for the authenticated requests.

## hashtagExample

Last updated1 month ago

Was this helpful?
