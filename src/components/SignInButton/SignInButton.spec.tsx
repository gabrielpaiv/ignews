import { SignInButton } from "."
import { useSession } from "next-auth/client"
import { render, screen } from "@testing-library/react"
import { mocked } from 'ts-jest/utils'

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('it renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <SignInButton />
    )

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })
  it('it renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue([{
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      expires: 'fake-expires'
    }, true])

    render(
      <SignInButton />
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})