import { render, screen } from '@testing-library/react'
import { getSession } from 'next-auth/client'
import { mocked } from 'ts-jest/utils'
import Post, { getServerSideProps } from '../../pages/posts/[slug]'
import { getPrismicClient } from '../../services/prismic'

const posts = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post abstract</p>',
  updatedAt: '10 de Abril'
}

jest.mock('../../services/prismic')
jest.mock('next-auth/client')

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Post post={posts} />)

    expect(screen.getByText('My New Post')).toBeInTheDocument()
    expect(screen.getByText('Post abstract')).toBeInTheDocument()
  })
  it('redirects user if no subscription is found', async () => {
    const getSessionMocked = mocked(getSession)

    getSessionMocked.mockResolvedValueOnce(null)

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post'
      }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/'
        })
      })
    )
  })
  it('loads initial data', async () => {
    const getSessionMocked = mocked(getSession)
    const getPrismicClientMocked = mocked(getPrismicClient)

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: 'fake-active-subscription'
    } as any)
    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            {
              type: 'heading',
              text: 'My new post'
            }
          ],
          content: [
            {
              type: 'paragraph',
              text: 'Post abstract'
            }
          ]
        },
        last_publication_date: '04-01-2021'
      })
    } as any)
    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post'
      }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new post',
            content: '<p>Post abstract</p>',
            updatedAt: '01 de abril de 2021'
          }
        }
      })
    )
  })
})