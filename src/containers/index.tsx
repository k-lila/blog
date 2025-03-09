import { ReactNode } from 'react'
import { Container } from './styles'

const BlogContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="view">{children}</div>
    </Container>
  )
}

export default BlogContainer
