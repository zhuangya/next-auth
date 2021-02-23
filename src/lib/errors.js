/**
 * Keep an eye on this proposal:
 * https://github.com/tc39/proposal-class-fields
 * When it reaches Stage 4, we can write:
 * class CustomError extends Error {
 *   name = "CustomError"
 * }
 */

/**
 * Same as the default `Error`, but it is JSON serializable.
 * @source https://iaincollins.medium.com/error-handling-in-javascript-a6172ccdf9af
 */
export class UnknownError extends Error {
  constructor (error) {
    // Support passing error or string
    super(error?.message ?? error)
    this.name = 'UnknownError'
    if (error instanceof Error) {
      this.stack = error.stack
    }
  }

  toJSON () {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack
    }
  }
}

export class OAuthCallbackError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'OAuthCallbackError'
  }
}

/**
 * Thrown when an Email address is already associated with an account
 * but the user is trying an OAuth account that is not linked to it.
 */
export class AccountNotLinkedError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'AccountNotLinkedError'
  }
}

export class CreateUserError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'CreateUserError'
  }
}

export class GetUserError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'GetUserError'
  }
}
export class GetUserByEmailError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'GetUserByEmailError'
  }
}
export class GetUserByIdError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'GetUserByIdError'
  }
}
export class GetUserByProviderAccountIdError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'GetUserByProviderAccountIdError'
  }
}
export class UpdateUserError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'UpdateUserError'
  }
}
export class DeleteUserError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'DeleteUserError'
  }
}
export class LinkAccountError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'LinkAccountError'
  }
}
export class UnlinkAccountError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'UnlinkAccountError'
  }
}
export class CreateSessionError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'CreateSessionError'
  }
}
export class GetSessionError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'GetSessionError'
  }
}
export class UpdateSessionError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'UpdateSessionError'
  }
}
export class DeleteSessionError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'DeleteSessionError'
  }
}
export class CreateVerificationRequestError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'CreateVerificationRequestError'
  }
}
export class GetVerificationRequestError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'GetVerificationRequestError'
  }
}
export class DeleteVerificationRequestError extends UnknownError {
  constructor (message) {
    super(message)
    this.name = 'DeleteVerificationRequestError'
  }
}
